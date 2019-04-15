<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout justify-center row>
      <v-flex md2 lg1 xl1 hidden-sm-and-down>
        <v-card dark color="secondary">
          one
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md7 lg8 xl5>
        <v-card dark color="secondary">
          two
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 md3 lg3 xl3 hidden-xs-only>
        <v-card dark color="secondary">
          three
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: 'default',
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
