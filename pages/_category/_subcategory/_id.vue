<template>
    <div>
        <hr />
        <h4>This is category-subcategory-id.vue</h4>
        <p>This Params is {{id}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';

@Component
export default class _index extends Vue {
    protected asyncData({params}: Context) {
        return {id: params.id};
    }
}
</script>
