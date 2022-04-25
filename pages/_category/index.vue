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
    // private category: string = '';

    protected asyncData({params}: Context) {
        return {category: params.category};
    }

    protected head() {
        return {
            title: `이건 카테고리페이지 ${this.category}`
        }
    }
}
</script>
