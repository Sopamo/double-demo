<template>
    In this example we persist all data in a pinia store
    <ul>
        <li v-for="user in usersStore.users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
    <button @click="addUser">Call double action</button>
    <div v-if="usersStore.isLoading['addUser']">calling dummy action...</div>
</template>

<script setup lang="ts">
import { useUsersStore } from './usersStore'
const usersStore = await useUsersStore()
const addUser  = () => {
    usersStore.addUser({
        name: 'Samuel L. Jackson'
    })
    usersStore.refresh()
}

</script>
