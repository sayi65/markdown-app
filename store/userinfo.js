import getUser from '~/apollo/queries/getUser.gql'

export const state = () => ({
  userdata: {},
  userdetail: {}
})

export const mutations = {
  GET_USER_INFO: function(state, user) {
    state.userdata = user.users[0]
    state.userdetail = user.users_details[0]
  }
}

export const actions = {
  async get_user_info({ commit }, user) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({
        query: getUser,
        variables: {
          userid: user.userid
        },
        context: {
          headers: {
            'X-Hasura-Role': 'anonymous',
            Authorization: this.$auth.getToken(this.$auth.strategy.name)
          }
        }
      })
      .then(({ data }) => {
        console.log(data.users[0])
        if (typeof data.users[0] !== 'undefined') {
          commit('GET_USER_INFO', data)
        } else {
          throw new Error('Bad credentials')
        }
      })
  }
}
