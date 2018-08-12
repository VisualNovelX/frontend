import { Component } from '@angular/core';

interface navItem {
    id: number,
    name: string,
    icon: string,
    path: string,
}

@Component({
  selector: 'side-nav-component',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    private navItems: navItem [] = [
        {
            id: 1,
            name: 'Home',
            icon: 'home',
            path: '/'
        },
        {
            id: 2,
            name: 'Blog',
            icon: 'book',
            path: '/blog'
        },
        {
            id: 3,
            name: 'Shop',
            icon: 'shopping_basket',
            path: '/shop'
        }
    ];
}
