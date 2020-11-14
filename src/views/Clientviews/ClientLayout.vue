<template>
<div class="container-fluid">
    <div class="row">
        <div class="col" style="background: #3c8dbc">
            <b-navbar toggleable="lg" type="dark">
                <b-navbar-brand href="#">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" />
                <b-collapse id="nav-collapse" is-nav>
                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'client_main' }" to="/client/main">
                        {{ $t("main") }}
                    </router-link>

                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'delivery_panel' }" to="/client/delivery_panel">
                        {{ $t("delivery_panel") }}
                    </router-link>

                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'client_deals' }" to="/client/deals">
                        {{ $t("deals") }}
                    </router-link>
                    <router-link class="nav-link text-white h-100" :class="{ active: $route.name === 'reports' }" to="/client/reports">
                        {{ $t("reports") }}
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
                            <svg v-b-toggle.params-sidebar class="bi bi-gear" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z" clip-rule="evenodd" />
                            </svg>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

        </div>
    </div>
    <div class="row wrapper">
        <div class="col h-100 mt-2">
            <b-sidebar id="params-sidebar" :title="$t('settings')" bg-variant="dark" text-variant="light" backdrop right shadow>
                <div class="px-3 py-2" v-b-modal.company_params_modal>
                    <em>კომპანია</em>
                </div>
            </b-sidebar>
            <router-view />
            <b-modal id="company_params_modal" scrollable title="კომპანიის პარამეტრები" ref="modal" size="md" ok-title="შენახვა" ok-only @ok="saveCompanyParams" :click-to-close="false" :no-close-on-backdrop="true">
                <table class="table table-borderless">
                    <tbody>
                        <tr v-for="i in companyParams" :key="i.id">
                            <td>
                                <label>{{ $t(i.param) }}</label>
                            </td>
                            <td>
                                <b-form-checkbox size="lg" v-model="i.is_value_bool" v-if="i.is_value_bool !== null" />
                                <b-form-input size="sm" v-model="i.value" v-else />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-modal>
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
