import getUser from '~/apollo/queries/getUser'

export const state = () => ({
  authToken: null,
  isLogin: false,
  authUser: null
})

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user
    console.log(user)
    if (user === null) {
      state.isLogin = false
    } else {
      state.isLogin = true
    }
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, { req }) {
    if (this.$auth.getToken(this.$auth.strategy.name) === false) {
      commit('SET_USER', null)
    } else {
      const client = this.app.apolloProvider.defaultClient
      const response = await client
        .query({
          query: getUser,
          context: {
            headers: {}
          }
        })
        .then(({ data }) => console.log(data))

      console.log(response)

      commit('SET_USER', this.$auth.getToken(this.$auth.strategy.name))
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
