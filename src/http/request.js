import axios from 'axios'
import auth from './auth'


axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {

    async postRequest(url, params) {
        try {

            return await axios.post(url, params, { headers: auth.getHeaderToken() })

        }catch(error) {
            if (error.response.status === 401) {
                auth.redirectToLogin()
            }else {
                console.log(error.response.data)
            }
        }
    }
}