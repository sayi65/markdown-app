import isLoginUser from '~/apollo/queries/isLoginUser.gql'

export const state = () => ({
  authToken: null,
  isLogin: false,
  authUser: null
})

export const mutations = {
  SET_USER: function(state, user) {
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
    if (
      this.$auth.getToken(this.$auth.strategy.name) === false ||
      this.$auth.getToken(this.$auth.strategy.name) === undefined
    ) {
      store.commit('SET_USER', null)
    } else {
      // GraphQL
      const client = context.app.apolloProvider.defaultClient
      await client
        .query({
          query: isLoginUser,
          context: {
            headers: {
              'X-Hasura-Role': 'login',
              Authorization: this.$auth.getToken(this.$auth.strategy.name)
            }
          }
        })
        .then(({ data }) => {
          console.log(data.users[0].users_details[0])
          if (typeof data.users[0].users_details[0] !== 'undefined') {
            data.users[0].avatarpath = data.users[0].users_details[0].avatarpath
            data.users[0].username = data.users[0].users_details[0].username
            delete data.users[0].users_details
          }

          console.log(data.users[0])
          store.commit('SET_USER', data.users[0])
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
