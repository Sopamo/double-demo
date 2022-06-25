import { defineDoublePiniaStore } from "double-vue/pinia";

export const useUsersStore = defineDoublePiniaStore('/src/examples/pinia/users', {
    state: () => {
        return {
            showNames: true,
            query: null,
        }
    },
    actions: {
        toggleShowNames() {
            // This action demonstrates how you can still use local state in the same store where you use remote state.
            this.showNames = !this.showNames
        }
    },
    getters: {
        queryConfig(state) {
            return {
                getUsers: {
                    query: state.query
                }
            }
        },
    },
})
