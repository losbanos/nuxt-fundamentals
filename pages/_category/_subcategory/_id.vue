<template>
    <div>
        <hr />
        <h4>This is category-subcategory-id.vue</h4>
        <p>This Params is {{cid}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';

@Component({
    data: () => {
        return {
            cid: ''
        }
    }
})
export default class Index extends Vue {
    protected asyncData({params}: Context) {
        return {cid: params.id};
    }
}
</script>
