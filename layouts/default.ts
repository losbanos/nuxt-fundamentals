import {Component, Vue} from 'nuxt-property-decorator';
import Post from '@pages/forms/post.vue';
import '@assets/global.css';
@Component({
    components: {
        Post
    }
})
export default class Default extends Vue {

}
