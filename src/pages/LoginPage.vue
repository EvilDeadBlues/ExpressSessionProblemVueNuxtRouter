<template>

    <Login>

    </Login>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from "nuxt-property-decorator";
    import Login from '../components/Authentication/Login.vue';

    @Component({
        name: "LoginPage",
        components: {
            Login,
        }
    })

    export default class LoginPage extends Vue {
    }

</script>