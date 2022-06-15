import { defineDoublePiniaStore } from "double-vue";

export const useUsersStore = defineDoublePiniaStore('examples/pinia/users', {
    state: () => {
        return {
            foo: 5,
            bar: 6,
        }
    },
})
