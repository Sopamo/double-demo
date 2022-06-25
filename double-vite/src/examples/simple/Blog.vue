<template>
    <div>
        <p>In this example we use double directly in a vue component.</p>
        <ul>
            <li v-for="blogEntry in blogEntries" :key="blogEntry.id">
                {{ blogEntry.title }} ({{ blogEntry.now }})
            </li>
        </ul>

        <p><button @click="refresh()">Refresh double data</button></p>

        <input placeholder="Enter message" v-model="message"><br />
        <button @click="submit">Call dummy action</button>
        <div v-if="isLoading['sendMessage']">sending message...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDouble } from 'double-vue'
export default defineComponent({
    async setup() {
        const double = await useDouble('/src/examples/simple/Blog')

        const submit = async () => {
            const response = await double.sendMessage({
                message: message.value
            })
            message.value = ""
            alert(response.original['content'])
        }

        const message = ref("")

        return {
            ...double,
            message,
            submit,
        }
    },
})
</script>
