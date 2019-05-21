// import { ApolloLink } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { Auth } from '@nuxtjs/axios'
// import state from '../store/index'

// export default (store, error, context, token) => {
//   console.log(store)
//   const client = context.app.apolloProvider.defaultClient
//   client.networkInterface.use([
//     {
//       applyMiddleware(req, next) {
//         console.log(this.$auth.getToken(this.$auth.strategy.name))
//         if (!req.options.headers) req.options.headers = {}
//         req.options.headers.Authorization = this.$auth.getToken(
//           this.$auth.strategy.name
//         )
//         next()
//       }
//     }
//   ])

//   // const httpLink = new HttpLink({ uri: 'http://localhost/v1/graphql' })
//   // console.log(Auth)
//   // const middlewareLink = new ApolloLink((operation, forward) => {
//   //   operation.setContext({
//   //     headers: {
//   //       authorization: 'this.$auth.getToken(this.$auth.strategy.name)'
//   //     }
//   //   })
//   //   return forward(operation)
//   // })
//   // const link = middlewareLink.concat(httpLink)
//   // return {
//   //   link,
//   //   cache: new InMemoryCache()
//   // }
//   console.log(context)
//   console.log(state.authToken)
//   return {
//     httpEndpoint: 'http://localhost/v1/graphql',
//     wsEndpoint: 'ws://localhost/v1/graphql'
//   }
// }
