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
            <div class="example-avatar">
              <div
                v-show="$refs.upload && $refs.upload.dropActive"
                class="drop-active"
              >
                <h3>Drop files to upload</h3>
              </div>
              <div v-show="!edit" class="avatar-upload">
                <div class="text-center p-2">
                  <label for="avatar">
                    <v-img
                      :src="
                        files.length
                          ? files[0].url
                          : 'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'
                      "
                      class="rounded-circle"
                    />
                  </label>
                </div>
                <div class="text-center p-2">
                  <file-upload
                    ref="upload"
                    v-model="files"
                    extensions="gif,jpg,jpeg,png,webp"
                    accept="image/*"
                    name="avatar"
                    class="btn btn-primary"
                    post-action="/upload/post"
                    :drop="!edit"
                    @input-filter="inputFilter"
                    @input-file="inputFile"
                  >
                    Upload avatar
                  </file-upload>
                </div>
              </div>

              <div v-show="files.length && edit" class="avatar-edit">
                <div v-if="files.length" class="avatar-edit-image">
                  <img ref="editImage" :src="files[0].url" />
                </div>
                <div class="text-center p-4">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click.prevent="$refs.upload.clear"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="editSave"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
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
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
  layout: 'default',
  components: {
    SettingNav,
    FileUpload
  },
  data() {
    return {
      files: [],
      edit: false,
      cropper: false
    }
  },
  watch: {
    edit(value) {
      // if (value) {
      //   this.$nextTick(function() {
      //     if (!this.$refs.editImage) {
      //       return
      //     }
      //     const cropper = new Cropper(this.$refs.editImage, {
      //       aspectRatio: 1 / 1,
      //       viewMode: 1
      //     })
      //     this.cropper = cropper
      //   })
      // } else if (this.cropper) {
      //   this.cropper.destroy()
      //   this.cropper = false
      // }
    }
  },
  methods: {
    update() {},
    editSave() {
      this.edit = false
      const oldFile = this.files[0]
      const binStr = atob(
        this.cropper
          .getCroppedCanvas()
          .toDataURL(oldFile.type)
          .split(',')[1]
      )
      const arr = new Uint8Array(binStr.length)
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i)
      }
      const file = new File([arr], oldFile.name, { type: oldFile.type })
      this.$refs.upload.update(oldFile.id, {
        file,
        type: file.type,
        size: file.size,
        active: true
      })
    },
    inputFile(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        this.$nextTick(function() {
          this.edit = true
        })
      }
      if (!newFile && oldFile) {
        this.edit = false
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert('Your choice is not a picture')
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = ''
        const URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file)
        }
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
.example-avatar .avatar-upload .rounded-circle {
  width: 200px;
  height: 200px;
}
.example-avatar .text-center .btn {
  margin: 0 0.5rem;
}
.example-avatar .avatar-edit-image {
  max-width: 100%;
}
.example-avatar .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}
.example-avatar .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>
