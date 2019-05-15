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
            :error-messages="usernameErrors"
            prepend-icon="fas fa-user-circle"
            hint="At least 100 characters"
            label="Login ID"
            counter
            clearable
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="pwdShow ? 'visibility' : 'visibility_off'"
            prepend-icon="fas fa-lock"
            :type="pwdShow ? 'text' : 'password'"
            :error-messages="passwordErrors"
            name="password"
            label="Password"
            hint="At least 100 characters"
            counter
            clearable
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="pwdShow = !pwdShow"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-text>
        <v-btn block color="primary" nuxt depressed large flat @click="submit"
          >LOG IN</v-btn
        >
        <v-divider />
        <v-card-actions>
          <v-btn fab dark small color="black">
            <v-icon dark>fab fa-github</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <p class="pa-2 text-xs-right">
            <nuxt-link class="pt-5" to="/signup">SIGN UP</nuxt-link>
          </p>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  layout: 'auth',
  data() {
    return {
      username: '',
      password: '',
      pwdShow: false
    }
  },
  validations: {
    username: {
      required,
      maxLength: maxLength(100)
    },
    password: {
      required,
      maxLength: maxLength(100)
    }
  },
  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength &&
        errors.push('Name must be at most 100 characters long')
      !this.$v.username.required && errors.push('Name is required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Name is required.')
      !this.$v.password.maxLength &&
        errors.push('Name must be at most 100 characters long')
      return errors
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
<style>
.v-content {
  padding-top: 0 !important;
}
</style>
