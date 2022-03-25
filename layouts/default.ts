import {Component, Vue} from 'nuxt-property-decorator';
import SideBar from '@components/SideBar.vue';
import '@assets/global.css';

@Component({
    components: {
        SideBar
    }
})
export default class Default extends Vue {

}
