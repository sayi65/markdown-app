<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <ProfileCard />
      </v-flex>
      <v-flex xs12 sm6 md5 lg5 xl4 class="mb-4">
        <FollowingList />
      </v-flex>
      <v-flex xs12 sm3 md3 lg3 xl2>
        <MypageNav />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MypageNav from '~/components/MypageNav.vue'
import FollowingList from '~/components/FollowingList.vue'
import ProfileCard from '~/components/ProfileCard.vue'

export default {
  layout: 'default',
  components: {
    MypageNav,
    FollowingList,
    ProfileCard
  },
  data() {
    return {
      active: null,
      bottomNav: 'Following',
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
          backClass: 'cyan lighten-3',
          iconClass: 'cyan lighten-3',
          title: 'Following',
          link: '/_id/following'
        },
        {
          icon: 'far fa-grin-alt',
          backClass: '',
          iconClass: 'grey lighten-1 white--text',
          title: 'Followers',
          link: '/_id/followers'
        }
      ]
    }
  },
  async asyncData({ store, redirect, params }) {
    await store
      .dispatch('userinfo/get_user_info', {
        userid: params.id
      })
      .then(response => {
        console.log(111111)
      })
      .catch(response => {
        redirect('/errors/404')
      })
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
