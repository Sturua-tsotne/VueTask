import Router from '../router/index'
import Store from '../store/index'

export default {
    getHeaderToken() {
        let _header = {'lang': Store.getters.getLang}

        const _token = Store.getters.getToken
        
        if (_token !== null) {
            _header = { Authorization: _token }
        }

        return _header
    },

    redirectToLogin() {
        Store.dispatch('removeCurrentUser')
        Router.push({ name: 'login' })
    }
}