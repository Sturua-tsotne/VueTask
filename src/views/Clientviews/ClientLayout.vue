<template>
<div class="container-fluid">
    <div class="row">
        <div class="col" style="background: #3c8dbc">
            <b-navbar toggleable="lg" type="dark">
                <b-navbar-brand href="#">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" />
                <b-collapse id="nav-collapse" is-nav>
                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'TplInformation' }" to="/client/main">
                        {{ $t("main") }}
                    </router-link>

                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'AddTpl' }" to="/client/delivery_panel">
                        {{ $t("add") }}
                    </router-link>

                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'client_deals' }" to="/client/deals">
                        {{ $t("edit") }}
                    </router-link>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown class="text-white" right>
                            <template v-slot:button-content>
                                <span style="color: white; font-size: 1.1em; margin-right: 3px">{{ getUserName }}</span>
                            </template>
                            <b-dropdown-item @click="signOut" style="z-index: 999999999">
                                {{ $t("exit") }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item>
                         
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

        </div>
    </div>
    
</div>
</template>

<script>
//import auth from "../../http/auth";
//import request from "../../http/request";

export default {
    name: "ClientLayout",
    components: {},
    data() {
        return {
            companyParams: [],
        };
    },
    // computed: {
    //     getUserName() {
    //         return this.$store.getters.getUsername;
    //     },
    // },
    // methods: {
    //     signOut() {
    //         auth.redirectToLogin();
    //     },
    //     languageChange(lang) {
    //         this.$i18n.locale = lang;
    //     },

    // },
    // async created() {
    //     this.getCompanyParam();
    // },
};
</script>

<style>
.active {
    color: #353737;
    font-style: normal;
}
</style>
