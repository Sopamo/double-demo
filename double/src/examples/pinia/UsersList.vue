<template>
    <p>In this example we persist all data in a pinia store.</p>
    <input v-model="usersStore.query" placeholder="Search query" />
    <ul>
        <li v-for="user in usersStore.users" :key="user.id">
            <template v-if="usersStore.showNames">
                {{ user.name }}
            </template>
            <template v-else>
                {{ user.id }}
            </template>
        </li>
    </ul>
    <button @click="usersStore.toggleShowNames">toggle show names</button> |
    <button @click="addUser">Call double action</button>
    <div v-if="usersStore.isLoading['addUser']">calling dummy action...</div>
</template>

<script setup lang="ts">
import { useUsersStore } from './usersStore'
const usersStore = await useUsersStore()
const addUser = () => {
    usersStore.addUser({
        name: 'Samuel L. Jackson'
    })
    usersStore.refresh()
}

</script>
