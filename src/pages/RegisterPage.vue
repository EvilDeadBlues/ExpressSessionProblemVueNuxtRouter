<template>

    <Register>

    </Register>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from "nuxt-property-decorator";
    import Register from '../components/Authentication/Register.vue';

    @Component({
        name: "RegisterPage",
        components: {
            Register,
        }
    })

    export default class RegisterPage extends Vue {
    }

</script>