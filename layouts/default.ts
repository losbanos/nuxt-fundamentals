import {Component, Vue} from 'nuxt-property-decorator';
import Post from '@pages/forms/post.vue';
import SideBar from '@components/SideBar.vue';
import '@assets/global.css';

@Component({
    components: {
        Post,
        SideBar
    }
})
export default class Default extends Vue {

}
