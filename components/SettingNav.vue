<template>
  <v-layout>
    <v-flex hidden-xs-only>
      <v-list class="transparent py-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          active-class="active-list"
          avatar
          nuxt
          router
          class="tile"
          exact
          :to="item.link"
        >
          <v-list-tile-avatar>
            <v-icon
              :class="[
                item.link === currentPath ? 'cyan lighten-3' : item.iconClass
              ]"
              >{{ item.icon }}</v-icon
            >
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
          exact
          router
          nuxt
          :to="item.link"
        >
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      active: null,
      bottomNav: '',
      currentPath: this.$route.path,
      items: [
        {
          icon: 'far fa-clipboard',
          iconClass: 'grey lighten-1 white--text',
          title: 'Profile',
          link: '/setting/profile'
        },
        {
          icon: 'far fa-paper-plane',
          iconClass: 'grey lighten-1 white--text',
          title: 'Account',
          link: '/setting/account'
        }
      ]
    }
  }
}
</script>
<style>
.active-list {
  background-color: #80deea;
  color: #0b70e2;
}
</style>
