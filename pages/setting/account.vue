<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row justify-center wrap>
      <v-flex xs12 sm4 md4 lg4 xl3>
        <SettingNav />
      </v-flex>
      <v-flex xs12 sm8 md8 lg8 xl6>
        <v-layout justify-start column class="pa-3 white">
          <v-flex text-xs-left>
            <h1 class="display-2">Account</h1>
          </v-flex>
          <v-divider class="mb-3" />
          <v-flex text-xs-left>
            <h1 class="headline">Picture</h1>
          </v-flex>
          <v-flex>
            <v-layout justify-start row>
              <v-flex xs3>
                <!-- <v-text-field
                  label="Avatar Image URL"
                  value=""
                  box
                  clearable
                  color="green"
                  placeholder="https://secure.gravatar.com/avatar/avatar.png"
                ></v-text-field> -->
                <v-menu
                  v-model="isOpen"
                  z-index="2"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-x
                  :return-value="removeFile(isOpen)"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn color="indigo" dark v-on="on">
                      Upload Image
                    </v-btn>
                  </template>

                  <v-card>
                    <dropzone
                      id="foo"
                      ref="el"
                      :options="options"
                      :destroy-dropzone="true"
                      :include-styling="false"
                      @vdropzone-success="success"
                      @vdropzone-max-files-exceeded="thumbnail"
                      @vdropzone-error="error"
                    >
                    </dropzone>
                  </v-card>
                </v-menu>
              </v-flex>
              <v-flex xs8>
                <v-avatar tile size="250">
                  <v-img class="elevation-2" :src="avatarImage" alt="John">
                  </v-img>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex text-xs-left>
            <h1 class="headline">UserName</h1>
          </v-flex>
          <v-flex>
            <v-text-field
              label="UserName"
              box
              readonly
              value="sayi65"
              color="green"
              maxlength="20"
            ></v-text-field>
          </v-flex>
          <v-flex text-xs-left>
            <h1 class="headline">Change Password</h1>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Old Password"
              box
              readonly
              color="green"
              maxlength="20"
            ></v-text-field>
            <v-text-field
              label="New Password"
              box
              readonly
              color="green"
              maxlength="20"
            ></v-text-field>
            <v-text-field
              label="Confirm New Password"
              box
              readonly
              color="green"
              maxlength="20"
            ></v-text-field>
          </v-flex>
          <v-divider />
          <v-flex class="mt-2">
            <v-btn color="success" @click="update">
              Update
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout justify-start column class="mt-3 pa-3 white">
          <v-flex text-xs-left>
            <h1 class="headline">Delete Account</h1>
            <p>
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </v-flex>
          <v-flex class="mt-2" text-xs-left>
            <v-btn color="red" dark @click="update">
              Delete Account
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SettingNav from '~/components/SettingNav.vue'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
  layout: 'default',
  components: {
    SettingNav,
    Dropzone
  },
  data() {
    return {
      isOpen: false,
      avatarImage: 'https://cdn.vuetifyjs.com/images/john.jpg',
      options: {
        url: 'https://httpbin.org/post',
        parallelUploads: 1,
        acceptedFiles: 'image/jpeg, image/jpg, image/png',
        maxFilesize: 10,
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        addRemoveLinks: true,
        maxFiles: 1,
        dictDefaultMessage:
          '<span> <i class="fas fa-cloud-upload-alt"></i> Upload Image</span>'
      }
    }
  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
    // this.instance = this.$refs.el.dropzone
  },
  methods: {
    update() {},
    thumbnail: function(file) {
      this.$refs.el.dropzone.removeFile(file)
    },
    success: function(file, response) {
      this.avatarImage = file.dataURL
      // this.menu = !this.menu
      // this.$refs.el.dropzone.removeFile(file)
    },
    error: function(file, message, xhr) {
      this.$refs.el.dropzone.removeFile(file)
    },
    removeFile: function(isOpen) {
      console.log(isOpen)
      if (!isOpen) {
        // this.$refs.el.dropzone.removeAllFiles()
      }
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
.vue-dropzone > .dz-preview .dz-details {
  background-color: rgba(29, 233, 182, 0.5) !important;
}
</style>
