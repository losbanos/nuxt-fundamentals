import {Component, Vue} from 'nuxt-property-decorator';

interface MenuItem {
    id: string;
    category: number;
    subcategory?: number;
    title: string;
    name: string;
}
@Component
export default class SideBar extends Vue {
    private menus: Array<MenuItem> = [
        {
            title: 'Home',
            id: 'menu1',
            name: 'index',
            category: 10,
        },
        {
            title: 'Menu 2',
            id: 'menu2',
            name: 'about-thank',
            category: 22,
            subcategory: 20000,
        },
        {
            title: 'Menu 3',
            id: 'menu3',
            name: 'category-subcategory',
            category: 33,
            subcategory: 3300
        },
        {
            title: 'Menu 4',
            id: 'menu4',
            name: 'category-subcategory-id',
            category: 44,
            subcategory: 4400
        }
    ]
}
