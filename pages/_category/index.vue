<template>
    <div>
        <hr />
        <div>This Category Index</div>
        <p>This Params is {{category}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';

@Component
export default class index extends Vue {
    protected asyncData({params}: Context) {
        return {category: params.category};
    }
}
</script>
