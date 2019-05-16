export const state = () => ({
  authToken: null,
  isLogin: false
})

export const mutations = {
  SET_USER: function(state, token) {
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
    // console.log(this.$auth.token !== undefined)
    // console.log(this.$auth.getToken(this.$auth.strategy.name) === false)
    // if (
    //   this.$auth.getToken(this.$auth.strategy.name) !== false &&
    //   this.$auth.token !== undefined
    // ) {
    //   // this.$auth.setUser({ name: 'test', email: 'test@test.com' })
    //   commit('SET_USER', this.$auth.getToken(this.$auth.strategy.name))
    // } else {
    //   commit('SET_USER', false)
    // }
    // console.log(Boolean(this.$auth.user))
    // this.$auth.reset()
    console.log(this.$auth.user)
    // console.log(Boolean(this.$auth.user))
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

            this.$auth.setUser(response.data)
            console.log(this.$auth.user)
          })
          .catch(err => {
            console.log(333)
            console.log(err.response.data.message)
            reject(err.response.data.message)
          })

        // this.$auth.setUser({ email: 'test@test.com', username: 'test' })

        // if (this.$auth.token !== undefined) {
        //   commit('SET_USER', this.$auth.getToken(this.$auth.strategy.name))
        // } else {
        //   commit('SET_USER', false)
        // }
      } catch (error) {
        console.log(error)
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    })
  },
  async logout({ commit, state }, { token }) {
    await this.$auth.logout()
    this.$auth.reset()
    // commit('SET_USER', false)
  }
}
