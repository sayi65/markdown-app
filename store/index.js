export const state = () => ({
  authToken: null,
  isLogin: false
})

export const mutations = {
  SET_USER: function(state, token) {
    console.log(token)
    state.authToken = token
    if (token !== false) {
      state.isLogin = true
    } else {
      state.isLogin = token
    }
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    console.log(this.$auth.getToken(this.$auth.strategy.name) === false)
    if (this.$auth.getToken(this.$auth.strategy.name) !== false) {
      // this.$auth.setUser({ name: 'test', email: 'test@test.com' })
      commit('SET_USER', this.$auth.getToken(this.$auth.strategy.name))
    }
  },
  async login({ commit, state }, { username, password }) {
    try {
      await this.$auth.loginWith('local', {
        data: {
          username: username,
          password: password
        }
      })
      console.log(this.$auth.getToken(this.$auth.strategy.name))
      commit('SET_USER', this.$auth.getToken(this.$auth.strategy.name))
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit, state }, { token }) {
    await this.$auth.logout()
    commit('SET_USER', false)
  }
}
