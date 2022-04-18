<template>
    <div>
        <hr />
        <h4>This Subscategory Index</h4>
        <p>This Params is {{subcategory}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";

@Component
export default class index extends Vue {
    protected asyncData({params}: Context) {
        return {subcategory: params.subcategory}
    }

    protected created() {
        console.log('[created] store = ', this.$store);
    }
    protected mounted() {
        console.log('[mounted] store = ', this.$store);
    }
}
</script>

