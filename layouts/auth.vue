<template>
  <v-app id="app">
    <div class="top-bk">
      <v-toolbar
        transition="scale-transition"
        app
        fixed
        flat
        height="60"
        color="transparent"
      >
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <nuxt />
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      title: 'Markdown'
    }
  }
}
</script>

<style>
.top-bk {
  width: 100%;
  height: 100vh;
  background-position: left top, left top;
  background-repeat: repeat, no-repeat;
  background-image: url(../assets/img/top-background.png),
    linear-gradient(-45deg, #32deaf, #1de9b6);
  animation: nl-Hero_Gradient 15s ease infinite;
  display: flex;
  align-items: center;
}
</style>
