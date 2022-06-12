<template>
    <div>
        <form @submit.prevent="submit">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="text" autocapitalize="off" v-model="username" placeholder="Username" />
            <input type="text" v-model="firstname" placeholder="First name" />
            <input type="password" v-model="password" placeholder="Password" />
            <input type="submit" :disabled="isLoading.signup" value="Create account" />
        </form>

        <form @submit.prevent="doLogin">
            <input type="text" autocapitalize="off" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <input type="submit" :disabled="isLoading.login" value="Login" />
        </form>
        <div v-for="recipe in recipes">
            {{ recipe.name }}
        </div>
    </div>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue'
import { useDouble } from "double-vue";

export default defineComponent({
    async setup() {
        const email = ref('')
        const password = ref('')
        const username = ref('')
        const firstname = ref('')
        const double = await useDouble('pages/Recipes')
        const submit = () => {
            double.signup({
                email,
                password,
                username,
                firstName: firstname,
            })
        }
        const doLogin = () => {
            const loginResponse = double.login({
                username,
                password,
            })
        }
        return {
            ...double,
            email,
            password,
            username,
            firstname,
            submit,
            doLogin,
        }
    },
})
</script>

<style>
* {
    box-sizing: border-box;
}

form {
    padding: 20px;
    border: 4px dashed #bada55;
    width: 400px;
    margin: 0 auto 20px auto;
}

h2 {
    text-align: center;
}

input {
    display: block;
    background: #421337;
    color: white;
    margin: 0 0 10px 0;
    padding: 5px;
    width: 100%;
}

input:last-child {
    margin-bottom: initial;
}

input[type='submit'] {
    margin-top: 20px;
}

input::placeholder {
    color: lightgray;
}
</style>
