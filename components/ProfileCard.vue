<template>
  <v-layout align-start justify-center column fill-height>
    <v-flex>
      <v-card class="mx-2">
        <v-img
          v-if="
            $store.state.userinfo.userdetail.avatarpath === null &&
              $store.state.userinfo.userdetail.avatarpath === 0
          "
          lazy-src="https://www.gravatar.com/avatar/06351e9c9bc6dc234adc46da4e5cf153&size=400"
          src="https://www.gravatar.com/avatar/06351e9c9bc6dc234adc46da4e5cf153&size=400"
          :alt="$store.state.authUser.username"
          class="elevation-1"
        />
        <v-img
          v-else
          :lazy-src="$store.state.userinfo.userdetail.avatarpath"
          :src="$store.state.userinfo.userdetail.avatarpath"
          alt="John"
          class="elevation-1"
        />

        <v-divider />
        <div>
          <h3 class="headline mb-0">
            @{{ $store.state.userinfo.userdata.loginid }}
          </h3>
        </div>
        <v-card-text>{{ userdata.blob }}</v-card-text>
        <v-divider />
        <v-btn nuxt href="/setting/profile" block flat>Change Profile</v-btn>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  mounted: {
    userdata() {
      return this.$store.getters['userinfo/getuserdetail']
    }
  }
}
</script>
