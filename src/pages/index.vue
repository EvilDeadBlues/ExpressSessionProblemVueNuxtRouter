<template>

    <div>

    <router-link to="login">Login</router-link>
    <br>
    <router-link to="register">Register</router-link>

    </div>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from "nuxt-property-decorator";

    @Component({
        name: "index",
    })
    export default class index extends Vue {
    }

</script>