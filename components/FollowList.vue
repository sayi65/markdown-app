<template>
  <v-layout column>
    <v-flex v-for="image in 9" :key="image.num">
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 4 : 1}`">
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
                    <v-list-tile-action-text class="title">
                      <nuxt-link to="/_id" class="black--text"
                        >@Kangaroo</nuxt-link
                      >
                    </v-list-tile-action-text>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout align-center justify-space-around row fill-height>
              <p class="grey--text text--darken-2 caption mb-0 subheading">
                <v-icon right>fas fa-clipboard</v-icon>
                <span class="body-2">16,544</span>
              </p>
              <p class="grey--text text--darken-2 caption mb-0 subheading">
                <v-icon right>fas fa-paper-plane</v-icon>
                <span class="body-2">16 </span>
              </p>
              <p class="grey--text text--darken-2 caption mb-0 subheading">
                <v-icon right>fas fa-grin-alt</v-icon>
                <span class="body-2">16 </span>
              </p>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn outline flat>Following</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>
