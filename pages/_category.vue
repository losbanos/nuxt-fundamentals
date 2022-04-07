<template>
    <div id="_categoryVue">
        <hr />
        <h2>This is <strong>_category.vue</strong></h2>
        <p>This Category Params is {{category}}</p>
        <nuxt-child />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Context} from '@nuxt/types';

@Component
export default class Category extends Vue {
    protected asyncData({params}: Context) {
        return {category: params.category}
    }
}
</script>
