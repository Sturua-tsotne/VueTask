<template>
<div class="container-fluid Login">
    <div class="row">
        <div class="offset-md-4 col-md-4 col-sm-6 offset-sm-3">
            <!-- <div style="margin-top: 30%;" class="text-center">
                <img src="../assets/mobileo_login.png" class="img-responsive" style="color:red;">
            </div> -->
            <div class="card" style="margin-top:10%;">
                <div class="card-title text-center mt-3">
                    {{ $t('enter_in_system') }}
                </div>
                <div class="card-body">
                    <div class="alert alert-danger" v-show="message !== ''">
                        {{ message }}
                    </div>
                    <form class="p-2">
                        <fieldset>
                            <div class="form-group">
                                <label for="id_user" class="login-label">{{ $t('user') }}</label>
                                <input class="form-control form-control-lg" v-model="loginModel.user" autocomplete="on" id="id_user" type="text">
                            </div>
                            <div class="form-group">
                                <label for="id_password" class="login-label">{{ $t('password') }}</label>
                                <input class="form-control form-control-lg" type="password" v-model="loginModel.password" autocomplete="off" id="id_password" @keyup.enter="signIn">
                            </div>

                            <b-button variant="primary" block @click="signIn" size="lg">
                                {{ $t('enter') }}
                            </b-button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import request from '../http/Loginrequest'
import LoginModel from '../models/login_model'

export default {
    name: 'Login',
    data() {
        return {
            message: '',
            loginModel: new LoginModel()
        }
    },
    methods: {
        async signIn() {
            this.message = ''
            const userResponse = await request.LoginRequest(this.loginModel.user, this.loginModel.password)
            if (userResponse) {
                if (userResponse.request.status === 200) {
                    this.$store.dispatch('setCurrentUser', userResponse.data)
                    this.$router.push({
                        name: 'admin_main'
                    })

                } else {
                    this.signInForm.password = ''
                    this.message = this.$t('incorrect_login')
                }
            } else {
                this.message = this.$t('incorrect_login')
            }
        }
    },
    mounted() {
        document.querySelector('#id_user').focus()
    }
}
</script>

<style lang="scss" scoped>
.card-title {
    font-size: 3vmin;
}

.img {
    width: 100px;
}
</style>
