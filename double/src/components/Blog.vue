<template>
    <div>
        Welcome to the `double` demo!<br />
        <button @click="newBlogEntry">new blog entry</button>
        <div v-if="isLoading['storeBlogEntry']">creating blog entry...</div>
        <br>
        <br>
        <div v-for="blogEntry in blogEntries" :key="blogEntry.id">
            {{ blogEntry.title }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useDouble } from 'double-vue'
export default defineComponent({
    async setup() {
        const double = await useDouble('components/Blog')

        const newBlogEntry = async () => {
            await double.storeBlogEntry({
                title: 'hi'
            })
            return double.refresh()
        }

        return {
            ...double,
            newBlogEntry,
        }
    },
})
</script>
