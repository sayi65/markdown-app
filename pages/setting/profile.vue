<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <SettingNav />
      </v-flex>
      <v-flex xs12 sm8 md8 lg8 xl6>
        <v-layout justify-start column class="pa-3 white">
          <v-flex text-xs-left>
            <h3 class="display-2">Public Profile</h3>
          </v-flex>
          <v-divider class="mb-3" />
          <v-flex>
            <v-text-field
              label="Name"
              counter
              box
              clearable
              color="green"
              maxlength="20"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Web/Blog"
              counter
              box
              clearable
              color="green"
              prefix="http(s)://"
              maxlength="200"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Company"
              counter
              box
              clearable
              color="green"
              maxlength="200"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Location"
              counter
              box
              clearable
              color="green"
              maxlength="200"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-textarea
              auto-grow
              box
              clearable
              color="green"
              label="Bio"
            ></v-textarea>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Facebook"
              value=""
              box
              clearable
              color="green"
              prefix="https://www.facebook.com/"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Linked In"
              value=""
              box
              clearable
              color="green"
              prefix="https://www.linkedin.com/in/"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Github"
              value=""
              box
              clearable
              color="green"
              prefix="https://github.com/"
            ></v-text-field>
          </v-flex>
          <v-divider />
          <v-flex class="mb-5">
            <v-btn color="success" @click="save">
              Update
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SettingNav from '~/components/SettingNav.vue'

export default {
  layout: 'default',
  components: {
    SettingNav
  },
  data() {
    return {
      pwdShow: false
    }
  },
  methods: {
    save() {}
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
</style>
