<template>
  <v-layout align-start justify-center column fill-height>
    <v-flex>
      <v-card class="mx-2">
        <v-img
          v-if="
            $store.getters['userinfo/getuserdetail'].avatarpath === null ||
              $store.getters['userinfo/getuserdetail'].avatarpath === ''
          "
          lazy-src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          :alt="$store.state.authUser.username"
          class="elevation-1"
        />
        <v-img
          v-else
          :lazy-src="$store.getters['userinfo/getuserdetail'].avatarpath"
          :src="$store.getters['userinfo/getuserdetail'].avatarpath"
          alt="John"
          class="elevation-1"
        />
        <v-divider />
        <div>
          <h3 class="headline mb-0">
            @{{ $store.state.userinfo.userdata.loginid }}
          </h3>
        </div>
        <v-card-text>{{
          $store.getters['userinfo/getuserdetail'].blob
        }}</v-card-text>
        <v-divider />
        <v-btn nuxt href="/setting/profile" block flat>Change Profile</v-btn>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {}
</script>
