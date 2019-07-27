<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm12 md12 lg12 xl10 class="px-4">
        <v-btn color="cyan lighten-3" value="test" flat exact @click="onTest">
          test
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {}
  },
  async asyncData({ store, redirect, params }) {
    await store
      .dispatch('userinfo/get_user_info', {
        userid: params.id
      })
      .then(response => {
        console.log('OK')
      })
      .catch(response => {
        redirect('/errors/404')
      })
  },
  methods: {
    onTest() {
      const editorExtensionId = 'ccafnkaafojphgehllhmlebkcplacbam'

      // Make a simple request:
      window.chrome.runtime.sendMessage(
        editorExtensionId,
        { message: 'hi', test: '11111' },
        response => {
          console.log(response)
        }
      )
    }
  }
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
.container {
  padding-top: 10px !important;
}
.tile:hover {
  background-color: #e3f2fd;
}
</style>
