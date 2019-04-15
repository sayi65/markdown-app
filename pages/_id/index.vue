<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <ProfileCard />
      </v-flex>
      <v-flex xs12 sm6 md5 lg5 xl4 class="mb-4">
        <v-layout column>
          <v-flex v-for="image in 9" :key="image.num">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 4 : 1}`"
              >
                <v-card-title class="pa-0">
                  <v-layout
                    align-end
                    justify-space-between
                    row
                    fill-height
                    class="px-3"
                  >
                    <v-flex xs11 sm11>
                      <v-list>
                        <v-list-tile>
                          <v-list-tile-avatar
                            ><v-img
                              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                          </v-list-tile-avatar>
                          <v-list-tile-action-text>
                            <nuxt-link to="/_id" class="body-2"
                              >@Kangaroo</nuxt-link
                            >
                            <p class="mb-1">
                              Created at 2019-04-30
                            </p>
                          </v-list-tile-action-text>
                        </v-list-tile>
                      </v-list>
                    </v-flex>
                    <v-flex xs4 sm5>
                      <v-list>
                        <v-list-tile-sub-title>
                          <p
                            class="grey--text text--darken-2 font-weight-light caption mb-1"
                          >
                            <v-icon right small>fas fa-thumbs-up</v-icon>16,544
                          </p>
                          <p
                            class="grey--text text--darken-2 font-weight-light caption mb-1"
                          >
                            <v-icon right small>fas fa-comment</v-icon>16
                          </p>
                        </v-list-tile-sub-title>
                      </v-list>
                    </v-flex>
                  </v-layout>
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <nuxt-link
                    to="/_id/item/_item"
                    class="subheading black--text"
                  >
                    "Turns out semicolon-less style is easier and safer in
                    TSbecause most gotcha edge cases are type invalid as well."
                  </nuxt-link>
                  <v-spacer />
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm3 md3 lg3 xl2>
        <MypageNav />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MypageNav from '~/components/MypageNav.vue'
import ProfileCard from '~/components/ProfileCard.vue'

export default {
  layout: 'default',
  components: {
    MypageNav,
    ProfileCard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
.container {
  padding-top: 10px !important;
}
.tile:hover {
  background-color: #e3f2fd;
}
.caption {
  float: right;
}
</style>
