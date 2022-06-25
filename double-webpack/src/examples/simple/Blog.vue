<template>
    <div>
        <p>In this example we use double directly in a vue component.</p>
        <ul>
            <li v-for="blogEntry in blogEntries" :key="blogEntry.id">
                {{ blogEntry.title }}
            </li>
        </ul>

        <button @click="newBlogEntry">Call double action</button>
        <div v-if="isLoading['storeBlogEntry']">calling dummy endpoint...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDouble } from 'double-vue'
export default defineComponent({
    async setup() {
        const double = await useDouble('/src/examples/simple/Blog')

        const newBlogEntry = async () => {
            await double.storeBlogEntry({
                title: 'hi'
            })
            // We call double.refresh here, just to show how you could do that.
            // In this example we don't persist any data though, so nothing will really change.
            return double.refresh()
        }

        return {
            ...double,
            newBlogEntry,
        }
    },
})
</script>
