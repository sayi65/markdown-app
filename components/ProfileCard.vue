<template>
  <v-layout align-start justify-centercolumn fill-height>
    <v-flex>
      <v-card class="mx-2">
        <v-img
          v-if="$store.state.userinfo.userdetail.avatarpath === null"
          lazy-src="https://www.gravatar.com/avatar/06351e9c9bc6dc234adc46da4e5cf153&size=400"
          src="https://www.gravatar.com/avatar/06351e9c9bc6dc234adc46da4e5cf153&size=400"
          :alt="$store.state.authUser.username"
          class="mr-2 elevation-2"
        />
        <v-img
          v-else
          :lazy-src="$store.state.userinfo.userdetail.avatarpath"
          :src="$store.state.userinfo.userdetail.avatarpath"
          alt="John"
          class="mr-2 elevation-2"
        />

        <v-divider />
        <div>
          <h3 class="headline mb-0">
            @{{ $store.state.userinfo.userdata.loginid }}
          </h3>
        </div>
        <v-card-text>{{ $store.state.userinfo.userdetail.blob }}</v-card-text>
        <v-divider />
        <v-btn nuxt href="/setting/profile" block flat>Change Profile</v-btn>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>
