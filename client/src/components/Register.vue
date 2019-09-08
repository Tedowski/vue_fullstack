<template>
  <div class="register">
    <h1>Register</h1>

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
    <button
      @click="register"
    >Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    display: flex;
    flex-direction: column;

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
</style>
