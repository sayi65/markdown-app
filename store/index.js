export const state = () => ({
  authToken: null
})

export const mutations = {
  SET_USER: function(state) {
    state.authToken = this.$auth.getToken(this.$auth.strategy.name)
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    commit('SET_USER')
    // }
  }
  //   async login({ commit }, { username, password }) {
  //     try {
  //       const { data } = await axios.post('/api/login', { username, password })
  //       console.log(data)
  //       commit('SET_USER', data)
  //     } catch (error) {
  //       if (error.response && error.response.status === 401) {
  //         throw new Error('Bad credentials')
  //       }
  //       throw error
  //     }
  //   },
}
