<template>
    <div id="_subcategory">
        <hr />
        <h3>This is <strong>_subcategory.vue</strong></h3>
        <p>Params is {{subcategory}}</p>
        <nuxt-child />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';

@Component
export default class Subcategory extends Vue {
    protected asyncData({params}: Context) {
        return {subcategory: params.subcategory}
    }
}

</script>
