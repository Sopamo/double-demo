<template>
    <div>
        Welcome to the `double` demo!
        <div v-for="blogEntry in blogEntries" :key="blogEntry.id">
            {{ blogEntry.id }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDouble } from 'double-vue'
export default defineComponent({
    async setup() {
        await Promise.resolve()
        const double = await useDouble('components/Blog')
        const newBlogEntry = await double.storeBlogEntry({
            title: 'hi'
        })
        return {
            ...double,
        }
    },
})
</script>
