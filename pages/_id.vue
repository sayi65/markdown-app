<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap>
      <v-flex>
        <v-card>
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
          <v-divider />
          <v-card-title>
            <h3 class="headline mb-0">@Kangaroo</h3>
          </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</v-card-text
          >
          <v-divider />
          <v-btn block flat nuxt="/setting/profile">Change Profile</v-btn>
          <v-divider />
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4 d-flex>
        <v-img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {}
  }
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
</style>
