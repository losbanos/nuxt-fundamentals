import {Component, Vue} from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
    protected head() {
        return {
            title: '여긴 메인페이지입니다.'
        }
    }
}
