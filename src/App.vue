<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {

    methods: {
        menuSelect(name) {
            switch (name) {
                case 'sign_out':
                    this.signOut()
                    break
            }
        },
        signOut() {
            this.$store.commit('removeCurrentUser')
            this.$router.push({
                name: 'login'
            })
        }
    },
    mounted() {
        this.$router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (!this.$store.getters.getToken) {
                    next({
                        name: 'login',
                        query: {
                            redirect: to.fullPath
                        }
                    })
                } else {
                    next()
                }
            } else {
                next()
            }
        })
    }
}
</script>
