<template>
    <h2>Simple demo</h2>
    <Suspense>
        <Blog />
    </Suspense>
    <hr />
    <h2>Pinia demo</h2>
    <Suspense>
        <UsersList />
    </Suspense>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Blog from "@/examples/simple/Blog.vue";
import UsersList from "@/examples/pinia/UsersList.vue";

export default defineComponent({
    name: 'App',
    components: {
        Blog,
        UsersList,
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
