import { RouterModule, Routes } from '@angular/router';
import { HomeView } from 'views/home/home.view';
import { ShopView } from 'views/shop/shop.view';
import { BlogView } from 'views/blog/blog.view';


const ViewsRoutes: Routes = [
    { path: '', component: HomeView },
    { path: 'blog', component: BlogView },
    { path: 'shop', component: ShopView },
];
  
export const ViewsRouting = RouterModule.forRoot(
    ViewsRoutes, 
    { enableTracing: true}
);