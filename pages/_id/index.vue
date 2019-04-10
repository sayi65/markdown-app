<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap align-start justify-center row fill-height>
      <v-flex xs12 sm4 md5 lg4 xl3>
        <v-layout align-start justify-start column fill-height>
          <v-card>
            <v-img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            <v-divider />
            <div>
              <h3 class="headline mb-0">@Kangaroo</h3>
            </div>
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</v-card-text
            >
            <v-divider />
            <v-btn href="/setting/profile" block flat>Change Profile</v-btn>
            <v-divider />
            <!-- <v-card-actions> </v-card-actions> -->
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm8 md7 lg8 xl9 fluid>
        <v-layout align-space-around justify-start column fill-height>
          <v-item-group>
            <v-flex fluid>
              <v-btn flat large outline color="indigo">ITEM</v-btn>
              <v-btn flat large>Contribution</v-btn>
              <v-btn flat large>Followers</v-btn>
            </v-flex>
          </v-item-group>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      active: null
    }
  },
  methods: {
    followers() {
      console.log(11111111)
    }
  }
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
</style>
