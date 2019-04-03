<template>
  <v-layout align-start justify-center row>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form" color="white">
        <v-card-text>
          <v-text-field
            ref="username"
            v-model="username"
            name="username"
            type="text"
            :rules="[() => !!username || 'This field is required']"
            :error-messages="errorMessages"
            prepend-icon="fas fa-user-circle"
            hint="At least 100 characters"
            label="Login ID"
            counter
            clearable
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="pwdShow ? 'visibility' : 'visibility_off'"
            prepend-icon="fas fa-lock"
            :type="pwdShow ? 'text' : 'password'"
            :error-messages="errorMessages"
            name="password"
            label="Password"
            hint="At least 100 characters"
            counter
            clearable
            required
            @click:append="pwdShow = !pwdShow"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-text>
        <v-btn block color="primary" depressed large flat href="/"
          >SiGN UP</v-btn
        >
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <p class="pa-2 text-xs-right">
            <nuxt-link class="pt-5" to="/login">LOGIN IN</nuxt-link>
          </p>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      pwdShow: false
    }
  },
  methods: {
    submit() {}
  }
}
</script>
<style>
.v-content {
  padding-top: 0 !important;
}
</style>
