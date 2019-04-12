<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <v-layout align-start justify-start column fill-height>
          <v-flex>
            <v-card class="mx-2">
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
              <v-btn nuxt href="/setting/profile" block flat
                >Change Profile</v-btn
              >
              <v-divider />
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md5 lg5 xl4 class="mb-4">
        <v-layout column>
          <v-flex v-for="image in 9" :key="image.num">
            <v-card>
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
                          <nuxt-link to="/_id">@Kangaroo</nuxt-link>
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
                    <!-- <v-layout align-space-around justify-start column>
                      <span class="grey--text caption"
                        >created at 2019/04/30</span
                      >
                      <span class="grey--text caption"
                        >created at 2019/04/30</span
                      >
                    </v-layout> -->
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <nuxt-link to="/_id/item/_item">
                  "Turns out semicolon-less style is easier and safer in
                  TSbecause most gotcha edge cases are type invalid as well."
                </nuxt-link>
                <v-spacer />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm3 md3 lg3 xl2>
        <!-- <v-layout>
          <v-flex hidden-xs-only>
            <v-list class="transparent py-0">
              <v-list-tile
                v-for="item in items"
                :key="item.title"
                :class="item.backClass"
                avatar
                nuxt
                class="tile"
                :to="item.link"
              >
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex hidden-sm-and-up>
            <v-bottom-nav
              :active.sync="bottomNav"
              :value="true"
              shift
              fixed
              mandatory
            >
              <v-btn
                v-for="item in items"
                :key="item.title"
                color="cyan lighten-3"
                :value="item.title"
                flat
                :to="item.link"
              >
                <span>{{ item.title }}</span>
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </v-bottom-nav>
          </v-flex>
        </v-layout> -->
        <MypageNav />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MypageNav from '~/components/MypageNav.vue'

export default {
  layout: 'default',
  components: {
    MypageNav
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
