<template>

    <AuthenticationPageTemplate>

        <div slot="cardTitle">
            Register
        </div>

        <div slot="cardForm">

            <b-form class="form" @submit.stop.prevent="onSubmit">

                <b-input-group>
                    <b-form-input type="text" v-model="username" @change="validateUsername" class="form-control" name="username" id="username_signup" placeholder="Username" />
                </b-input-group>

                <b-input-group>
                    <b-form-input type="text" v-model="email" @change="validateEmail" class="form-control" name="email" id="email_signup" placeholder="Email" />
                </b-input-group>

                <b-input-group>
                    <b-form-input type="password" v-model="password" @change="validatePassword" class="form-control" name="password" id="password_signup" placeholder="Password" />
                </b-input-group>

                <b-input-group>
                    <b-form-input type="password" v-model="confirm_password" @change="validatePasswords" class="form-control" name="confirm_password" id="confirm_password_signup" placeholder="Confirm Password" />
                </b-input-group>

                <div class="card-footer">
                    <b-button type="submit" class="btn btn-primary" id="submit-form">Sign Up</b-button>
                </div>

            </b-form>

        </div>

    </AuthenticationPageTemplate>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import { BForm } from 'bootstrap-vue';
    import { BFormGroup } from 'bootstrap-vue';
    import { InputGroupPlugin } from 'bootstrap-vue'
    import { BButton } from 'bootstrap-vue';
    import AuthenticationPageTemplate from './AuthenticationPageTemplate.vue';
    import axios from 'axios';

    Vue.component('b-form', BForm);
    Vue.component('b-form-group', BFormGroup);
    Vue.component('b-button', BButton);
    Vue.use(InputGroupPlugin)

    @Component({
        name: "Register",
        components: {
            AuthenticationPageTemplate,
        }
    })
    export default class Register extends Vue {

        username = '';
        email = '';
        password = '';
        confirm_password = '';

        async onSubmit(): Promise<void> {
            console.log("test");
            await axios.post('/register', {
                username: this.username,
                email: this.email,
                password: this.password,
            });
        }

    }

</script>