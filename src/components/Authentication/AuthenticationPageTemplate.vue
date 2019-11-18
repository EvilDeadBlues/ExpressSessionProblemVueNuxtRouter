<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="page-header-image"></div>

            <div class="content">
                <div class="container">
                    <div class="d-flex align-items-center min-vh-100">
                        <div class="col-12 col-md-5 form-container mx-auto">
                            <div class="card">
                                
                                <h1 class="display-1">

                                    <slot name="cardTitle">

                                    </slot>

                                </h1>
                                
                                <div class="card-body">
                                    
                                    <slot name="cardForm">

                                    </slot>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'nuxt-property-decorator';

    @Component({
        name: "AuthenticationPageTemplate",
    })
    export default class AuthenticationPageTemplate extends Vue {
    }

</script>