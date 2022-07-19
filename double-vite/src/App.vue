<template>
    <h1>Welcome to the double demo!</h1>
    <p>To start using double, open the files double-vite/src/examples/simple/Blog.vue and double-vite/src/examples/simple/Blog.php</p>
  <Suspense>
  <Blog />
  </Suspense>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Blog from './examples/simple/Blog.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
