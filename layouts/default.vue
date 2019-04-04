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
              <v-toolbar-title v-text="title" />
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
              <v-toolbar-title v-text="title" />
              <v-spacer />
              <v-menu open-on-hover class="pr-4">
                <v-avatar slot="activator">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <v-list>
                  <v-list-tile v-for="(item, index) in items" :key="index">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
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
      isLogin: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
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
</style>
