<template>
    <div>
        Welcome to the `double` demo!<br />
        <button @click="newBlogEntry">new</button>
        {{ isLoading }}
        <div v-if="isLoading['storeBlogEntry']">loading...</div>
        <div v-for="blogEntry in blogEntries" :key="blogEntry.id">
            {{ blogEntry.id }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useDouble } from 'double-vue'
export default defineComponent({
    async setup() {
        await Promise.resolve()
        const double = await useDouble('components/Blog')
        watchEffect(() => {
            console.log(double.isLoading.storeBlogEntry)
        })
        const newBlogEntry = async () => {
            await double.storeBlogEntry({
                title: 'hi'
            })
            double.refresh()
        }
        return {
            ...double,
            newBlogEntry,
        }
    },
})
</script>
