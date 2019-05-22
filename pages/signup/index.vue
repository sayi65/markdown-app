<template>
  <v-layout align-start justify-center row>
    <v-flex xs12 sm8 md6 lg4>
      <v-card ref="form" color="white">
        <v-card-text>
          <form>
            <v-text-field
              ref="username"
              v-model="username"
              name="username"
              type="text"
              prepend-icon="fas fa-user-circle"
              hint="At least 100 characters"
              label="Username"
              counter
              clearable
              required
              autocomplete="username"
              :error-messages="usernameErrors"
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
            ></v-text-field>
            <v-text-field
              ref="email"
              v-model="email"
              name="email"
              type="email"
              :error-messages="emailErrors"
              prepend-icon="fas fa-at"
              label="E-mail"
              autocomplete="email"
              counter
              clearable
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              ref="password"
              v-model="password"
              :append-icon="pwdShow ? 'visibility' : 'visibility_off'"
              prepend-icon="fas fa-lock"
              :type="pwdShow ? 'text' : 'password'"
              :error-messages="passwordErrors"
              autocomplete="new-password"
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
          </form>
          <v-spacer></v-spacer>

          <v-alert
            v-model="isAlert"
            dismissible
            color="error"
            icon="warning"
            outline
            transition="scale-transition"
          >
            {{ message }}
          </v-alert>

          <v-spacer></v-spacer>
        </v-card-text>
        <v-btn block color="primary" depressed large flat @click="signup"
          >SIGN UP</v-btn
        >
        <v-divider />
        <v-card-actions>
          <v-btn fab dark small color="black">
            <v-icon dark>fab fa-github</v-icon>
          </v-btn>
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
import { validationMixin } from 'vuelidate'
import {
  required,
  maxLength,
  minLength,
  email,
  alphaNum
} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  layout: 'auth',
  data: () => ({
    pwdShow: false,
    username: '',
    email: '',
    password: '',
    isAlert: false,
    message: ''
  }),
  validations: {
    username: {
      required,
      alphaNum,
      minLength: minLength(6),
      maxLength: maxLength(100)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      alphaNum,
      minLength: minLength(8)
    }
  },
  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength &&
        errors.push('Name must be at most 100 characters long')
      !this.$v.username.required && errors.push('Name is required.')
      !this.$v.username.minLength &&
        errors.push('Name must be at most 6 characters long')
      !this.$v.username.alphaNum && errors.push('Username must be alphaNum')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Name must be at most 8 characters long')
      !this.$v.password.required && errors.push('Name is required.')
      !this.$v.password.alphaNum && errors.push('Username must be alphaNum')
      return errors
    }
  },
  methods: {
    async signup() {
      this.isAlert = false
      this.$v.$touch()
      if (this.$v.$invalid) return
      await this.$axios
        .$post('/api/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res)
          if (res.status === 'OK') {
            this.isAlert = false
          }
        })
        .catch(err => {
          if (err.response.data.status === 'NG') {
            this.isAlert = true
            this.message = err.response.data.message
          }
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
