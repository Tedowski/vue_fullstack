<template>
  <div id="app">
    <page-header/>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import pageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  padding-top: 112px;
}

.container {
  position: relative;
  margin: 0 auto;
  max-width: 880px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  cursor: pointer;
}

.mg-right-12 {
  margin-right: 12px;
}

form {
    display: flex;
    flex-direction: column;
  }
</style>
