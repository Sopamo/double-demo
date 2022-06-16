import { defineDoublePiniaStore } from "double-vue";

export const useUsersStore = defineDoublePiniaStore('examples/pinia/users', {
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
