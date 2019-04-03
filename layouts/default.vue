<template>
  <v-app id="app">
    <div class="top-bk">
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
        <v-btn href="/signup" outline color="#26617d">ユーザー登録 </v-btn>
        <v-btn href="/login" outline color="#26617d">ログイン</v-btn>
      </v-toolbar>
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
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
      shadow: true
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
