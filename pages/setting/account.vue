<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <SettingNav />
      </v-flex>
      <v-flex xs12 sm8 md8 lg8 xl6>
        <v-card color="green">
          two
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SettingNav from '~/components/SettingNav.vue'

export default {
  layout: 'default',
  components: {
    SettingNav
  },
  data() {
    return {
      pwdShow: false
    }
  },
  methods: {
    submit() {}
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
</style>
