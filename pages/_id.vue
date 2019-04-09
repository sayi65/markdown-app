<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap fluid>
      <v-flex d-flex xs12 sm4 md5 lg4 xl3 fluid>
        <v-layout wrap fluid>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</v-card-text
            >
            <v-divider />
            <v-btn block flat>Change Profile</v-btn>
            <v-divider />
            <!-- <v-card-actions> </v-card-actions> -->
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm8 md7 lg8 xl9>
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
    return {
      cardHeight: ''
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      console.log(this.$vuetify.breakpoint.name)
      switch (this.$vuetify.breakpoint.name) {
        case 'lg':
          this.cardHeight = 'height=600'
          break
        case 'xl':
          this.cardHeight = 'height=800'
          break
      }
    }
  }
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
</style>
