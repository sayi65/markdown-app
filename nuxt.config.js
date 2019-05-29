const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/app.styl',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/scroll',
    '@/plugins/fileupload',
    { src:'@/plugins/vuelidate', ssr: false },
    { src:'@/plugins/tui-editor', ssr: false},
    { src:'@/plugins/scrollto', ssr:false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:3000',
    proxy: true
  },

  apollo: {
    clientConfigs: {
      // default: '@/plugins/apollo.js',
      default: {
        httpEndpoint: 'http://13.236.93.74:32273/v1/graphql',
        wsEndpoint: 'ws://13.236.93.74:32273/v1/graphql',
        websocketsOnly: false, 
      }
    },
  },

  proxy:{
      '/api/': 'http://localhost:3000/api/',
  },

  dotenv: {
    filename: '.env'
  },

  auth: {
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user:false
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/',
      logout: '/'
    },
  },

  tui: {
    editor: {
      exts: ['colorSyntax','scrollSync', 'chart', 'table', 'uml'],
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    vendor: ['@toast-ui/vue-editor'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
  serverMiddleware: [
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
