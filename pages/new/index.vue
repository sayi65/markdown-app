<template>
  <div>
    aaaaaaaaaaaaaa
    <v-btn color="success" dark @click="test">
      Upload Image
    </v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      console.log(this.$route.name === 'new')
    }
  }
}
</script>
