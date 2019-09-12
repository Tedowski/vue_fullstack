<template>
  <div class="login">
    <h1>Login</h1>

    <form
      name="tab-tracker-login">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Your E-mail"
      />

      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
      <div class="error" v-html="error" />
      <v-btn
        class="orange"
        @click="login">
        Login
      </v-btn>
    </form>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    max-width: 440px;
    margin: 0 auto;
  }

  input {
    padding: 8px;
    margin-bottom: 12px;
  }

  button {
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 4px;
    border-color: blue;
    background-color: blue;
    color: white;
  }

  button:hover {
    background-color: aquamarine;
    color: blue;
  }

  .error {
    color: red;
  }
</style>
