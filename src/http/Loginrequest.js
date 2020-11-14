import qs from 'qs'
import axios from 'axios'

export default {

    async LoginRequest(user , pass){
        axios({
        method: 'post',
         url: 'http://localhost:5000/connect/token',
         data: qs.stringify({
            ClientId: user ,
            Secret: pass,
         }),
         scope:"tplApi",
         headers: {
           'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
         }
       })
    }
   
} 