import * as R from 'ramda'


class LoginModel {
    constructor(login={}) {
        this.user = R.is(String, login.user) ? login.user : ''
        this.password = R.is(String, login.password) ? login.password : ''
    }


    toJsonObject() {
        return {
            'email': this.user,
            'password': this.password
        }
    }

}

export default LoginModel