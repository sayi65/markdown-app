import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Auth } from '@nuxtjs/axios'

export default ctx => {
  const httpLink = new HttpLink({ uri: 'http://localhost/v1/graphql' })

  console.log(Auth)
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: 'this.$auth.getToken(this.$auth.strategy.name)'
      }
    })
    return forward(operation)
  })

  const link = middlewareLink.concat(httpLink)

  return {
    link,
    cache: new InMemoryCache()
  }
}
