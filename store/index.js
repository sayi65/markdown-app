// import getUser from '~/apollo/queries/getUser'

export const state = () => ({
  authToken: null,
  isLogin: false,
  authUser: null
})

export const mutations = {
  SET_USER: function(state, user) {
    console.log(user)
    state.authUser = user

    if (user === null) {
      state.isLogin = false
    } else {
      state.isLogin = true
    }
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit(store, context) {
    console.log(this.$auth.getToken(this.$auth.strategy.name))
    if (
      this.$auth.getToken(this.$auth.strategy.name) === false ||
      this.$auth.getToken(this.$auth.strategy.name) === undefined
    ) {
      store.commit('SET_USER', null)
    } else {
      await this.$axios({
        url: 'http://localhost/v1/graphql',
        headers: {
          Authorization: this.$auth.getToken(this.$auth.strategy.name),
          'x-hasura-role': 'login'
        },
        method: 'post',
        data: {
          query: `{
            users {
              email
              id
              loginid
              user_details {
                avatarpath
                userid
                username
              }
            }
          }`
        }
      }).then(result => {
        // console.log(result)
        result.data.data.users[0].avatarpath =
          result.data.data.users[0].user_details[0].avatarpath
        result.data.data.users[0].username =
          result.data.data.users[0].user_details[0].username
        delete result.data.data.users[0].user_details
        store.commit('SET_USER', result.data.data.users[0])
      })
    }
  },
  login({ commit, state }, { username, password }) {
    return new Promise((resolve, reject) => {
      // Do something here... lets say, a http call using vue-resource
      try {
        this.$axios
          .$post('/api/auth/login', {
            username: username,
            password: password
          })
          .then(response => {
            if (response.status === 'OK') {
              this.$auth.loginWith('local', {
                data: {
                  username: username,
                  password: password
                }
              })
            }
            commit('SET_USER', response.data)
            console.log(response.data)
            resolve('OK')
          })
          .catch(err => {
            reject(err.response.data.message)
          })
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    })
  },
  async logout({ commit, state }, { token }) {
    await this.$auth.logout()
    commit('SET_USER', null)
  }
}
