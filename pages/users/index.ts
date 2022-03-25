import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';

@Component
export default class Index extends Vue {
    protected asyncData({params, query}: Context) {
        console.log('params = ', params);
        console.log('query = ', query);
        return {uid: params.id, userNo: query.userNo};
    }

    protected validate({params}: Context) {
        return /\d+/g.test(params.id);
    }
}
