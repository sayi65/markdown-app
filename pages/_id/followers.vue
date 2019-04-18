<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <ProfileCard />
      </v-flex>
      <v-flex xs12 sm6 md5 lg5 xl4 class="mb-4">
        <FollowersList />
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
                class="tile"
                nuxt
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
            <v-bottom-nav :active.sync="bottomNav" :value="true" shift fixed>
              <v-btn
                v-for="item in items"
                :key="item.title"
                :color="item.backClass"
                :value="item.title"
                flat
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
import FollowersList from '~/components/FollowersList.vue'
import ProfileCard from '~/components/ProfileCard.vue'

export default {
  layout: 'default',
  components: {
    MypageNav,
    FollowersList,
    ProfileCard
  },
  data() {
    return {
      active: null,
      bottomNav: 'Followers',
      items: [
        {
          icon: 'far fa-clipboard',
          backClass: '',
          iconClass: 'grey lighten-1 white--text',
          title: 'Item',
          link: '/_id'
        },
        {
          icon: 'far fa-paper-plane',
          backClass: '',
          iconClass: 'grey lighten-1 white--text',
          title: 'Following',
          link: '/_id/following'
        },
        {
          icon: 'far fa-grin-alt',
          backClass: 'cyan lighten-3',
          iconClass: 'cyan lighten-3',
          title: 'Followers',
          link: '/_id/followers'
        }
      ]
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
.container {
  padding-top: 10px !important;
}
.tile:hover {
  background-color: #e3f2fd;
}
</style>
