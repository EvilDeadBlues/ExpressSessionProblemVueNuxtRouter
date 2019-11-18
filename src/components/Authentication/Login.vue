<template>

    <AuthenticationPageTemplate>

        <div slot="cardTitle">
            Login
        </div>

        <div slot="cardForm">

            <b-form class="form" @submit.stop.prevent="onSubmit">

                <b-input-group>
                    <b-form-input type="text" v-model="username" class="form-control" name="username" placeholder="Username" />
                </b-input-group>

                <b-input-group>
                    <b-form-input type="password" v-model="password" class="form-control" name="password" placeholder="Password" />
                </b-input-group>

                <div class="card-footer">
                    <b-button type="submit" class="btn btn-primary" id="submit-form">Login</b-button>
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
        name: "Login",
        components: {
            AuthenticationPageTemplate,
        }
    })
    export default class Login extends Vue {

        username = '';
        password = '';

        async onSubmit(): Promise<void> {
            let result = await axios.post('/login', {
                username: this.username,
                password: this.password,
            });
        }

    }

</script>