<template>
  <v-app id="app">
    <div v-if="!isLogin" class="top-IsNotLogin">
      <v-content>
        <v-container>
          <v-layout flex-child wrap>
            <v-toolbar
              v-scroll="handleScroll"
              transition="scale-transition"
              app
              fixed
              :flat="shadow"
              height="60"
              :color="toolbarColor"
            >
              <v-toolbar-title>
                <nuxt-link to="/" class="mt-2 pa-2">
                  <img src="/logo.svg" />
                </nuxt-link>
              </v-toolbar-title>
              <v-spacer />
              <v-btn href="/signup" outline color="#26617d"
                >ユーザー登録
              </v-btn>
              <v-btn href="/login" outline color="#26617d">ログイン</v-btn>
            </v-toolbar>
          </v-layout>
        </v-container>
      </v-content>
    </div>
    <div v-else class="top-IsLogin">
      <v-content>
        <v-container>
          <v-layout row wrap>
            <v-toolbar
              v-scroll="handleScroll"
              transition="scale-transition"
              app
              dense
              :flat="shadow"
              height="60"
              :color="toolbarColor"
            >
              <v-toolbar-title>
                <nuxt-link to="/" class="mt-2 pa-2">
                  <img src="/logo.svg" />
                </nuxt-link>
              </v-toolbar-title>

              <v-spacer />
              <v-toolbar-title v-if="this.$route.name !== 'new'">
                <v-btn
                  class="top-add-btn mr-4"
                  large
                  outline
                  nuxt
                  color="grey darken-4"
                  to="/new"
                >
                  <v-icon left dark>fas fa-pen-square</v-icon>New
                </v-btn>
              </v-toolbar-title>
              <v-toolbar-items>
                <v-menu class="pr-4" offset-y>
                  <v-list slot="activator" class="transparent">
                    <v-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        class="mr-2 elevation-2"
                      />
                      <v-icon dark>fas fa-angle-down</v-icon>
                    </v-avatar>
                  </v-list>
                  <v-list>
                    <v-list-tile to="/_id">
                      <v-icon small class="mr-2" color="red"
                        >fas fa-user-cog</v-icon
                      >
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Your Profile
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile to="/setting/profile">
                      <v-icon class="mr-2" small color="red">fas fa-cog</v-icon>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Setting
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider />
                    <v-list-tile to="/logout">
                      <v-icon class="mr-2" small color="red"
                        >fas fa-sign-out-alt</v-icon
                      >
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Logout
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-toolbar-items>
            </v-toolbar>
          </v-layout>
        </v-container>
      </v-content>
    </div>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      title: 'Markdown',
      toolbarColor: 'transparent',
      shadow: true,
      isLogin: false
    }
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 0) {
        this.toolbarColor = 'teal accent-3'
        this.shadow = false
      } else {
        this.toolbarColor = 'transparent'
        this.shadow = true
      }
    }
  }
}
</script>
<style>
.top-IsNotLogin {
  width: 100%;
  background-position: left top, left top;
  background-size: 400px, 400% 400%;
  background-repeat: repeat, no-repeat;
  background-image: url(../assets/img/top-background.png),
    linear-gradient(-45deg, #32deaf, #1de9b6);
  animation: nl-Hero_Gradient 15s ease infinite;
  height: 60px;
  display: flex;
  align-items: center;
}
.top-IsLogin {
  width: 100%;
  background-position: left top, left top;
  background-size: 400px, 400% 400%;
  background-repeat: repeat, no-repeat;
  background-image: url(../assets/img/top-background.png),
    linear-gradient(-45deg, #32deaf, #1de9b6);
  animation: nl-Hero_Gradient 15s ease infinite;
  height: 60px;
  display: flex;
  align-items: center;
}
.top-add-btn {
  background: transparent !important;
}
#app {
  background-color: #f5f5f5;
}
</style>
