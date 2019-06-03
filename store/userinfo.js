import getUser from '~/apollo/queries/getUser.gql'
import updateUser from '~/apollo/queries/updateUser.gql'

export const state = () => ({
  userdata: {},
  userdetail: {}
})

export const getters = {
  getuserdetail: state => state.userdetail,
  getuserdata: state => state.userdata
}

export const mutations = {
  GET_USER: function(state, user) {
    state.userdata = user
  },
  GET_USER_INFO: function(state, user) {
    state.userdetail = user
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
        if (
          typeof data.users[0] !== 'undefined' &&
          typeof data.users_details[0] !== 'undefined'
        ) {
          commit('GET_USER', data.users[0])
          commit('GET_USER_INFO', data.users_details[0])
        } else {
          throw new Error('Bad credentials')
        }
      })
  },
  async set_user_info({ commit }, user) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .mutate({
        mutation: updateUser,
        variables: {
          userid: user.userid,
          updatedata: user.data
        },
        context: {
          headers: {
            'X-Hasura-Role': 'login',
            Authorization: this.$auth.getToken(this.$auth.strategy.name)
          }
        }
      })
      .then(({ data }) => {
        if (typeof data.update_users_details.returning[0] !== 'undefined') {
          commit('GET_USER_INFO', data.update_users_details.returning[0])
        } else {
          throw new Error('Bad credentials')
        }
      })
  }
}
