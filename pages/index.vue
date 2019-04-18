<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md8 lg8 xl5>
        <v-layout column justify-center align-center>
          <v-flex v-for="image in images" :key="image.num">
            <v-card class="mb-2 mx-2" max-width="1100">
              <v-card-title>
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title class="grey--text">
                      by
                      <nuxt-link to="/_id" class="black--text"
                        >Evan You</nuxt-link
                      >
                    </v-list-tile-title>
                  </v-list-tile-content>

                  <v-layout justify-end>
                    <v-layout align-end justify-center column fill-height>
                      <span
                        class="grey--text text--darken-2 font-weight-light caption"
                        ><v-icon right small>fas fa-thumbs-up</v-icon
                        >16,544</span
                      >
                      <span
                        class="pt-2 grey--text text--darken-2 font-weight-light caption"
                        >1 hours ago</span
                      >
                    </v-layout>
                  </v-layout>
                </v-list-tile>
              </v-card-title>
              <v-divider />

              <v-card-text class="title text-xs-left">
                <nuxt-link to="/_id/item/_item" class="subheading black--text">
                  C++標準化委員会は踏み抜きやすいUndefined Behavior
                  TOP100のようなものを公式に出すべきではないか
                </nuxt-link>
                <v-spacer />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4>
        <TopRNav />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TopRNav from '~/components/TopRNav.vue'

export default {
  components: {
    TopRNav
  },
  data() {
    return {
      images: Array.from(new Array(10)).map((e, i) => ({
        num: i + 1
      }))
    }
  }
}
</script>

<style>
.top-IsNotLogin {
  height: 500px !important;
}
.v-content {
  padding-top: 5px !important;
}
.container {
  padding-top: 10px !important;
}
.caption {
  float: right;
}
</style>
