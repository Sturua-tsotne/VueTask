import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        lang: 'ka',
        picker: {
            dateFrom : null,
            dateTo: null
        }
    },
    mutations: {
        setCurrentUser(state, value) {
            state.user = value
        },
        removeCurrentUser(state) {
            state.user = null
        },
        setLang(state, lang) {
            state.lang = lang
        },
        setPickerFrom(state, date_from) {
            state.picker.dateFrom = date_from
        },
        setPickerTo(state, date_to) {
            state.picker.dateTo = date_to
        }
    },
    actions: {
        setCurrentUser({commit}, value) {
            commit('setCurrentUser', value)
        },
        removeCurrentUser({commit}, value) {
            commit('removeCurrentUser', value)
        },
        setLang({commit}, lang) {
            commit('setLang', lang)
        },
        setPickerFrom({commit}, date_from) {
            commit('setPickerFrom', date_from)
        },
        setPickerTo({commit}, date_to) {
            commit('setPickerTo', date_to)
        }
    },
    getters: {
        getToken: state => state.user !== null && state.user.token,
        getUsername: state => state.user !== null && state.user.name,
        signed: state => state.user !== null && state.user.token !== null,
        getCompanyId: state => state.user !== null && state.user.company_id,
        getLang: state => state.lang ?? 'ka',
        getPicker: state => state.picker,
    },
    plugins: [createPersistedState({key:'TpL'})]
})
