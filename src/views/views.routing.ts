import { RouterModule, Routes } from '@angular/router';
import { HomeView } from 'views/home/home.view';


const ViewsRoutes: Routes = [
    { path: '', component: HomeView },
];
  
export const ViewsRouting = RouterModule.forRoot(
    ViewsRoutes, 
    { enableTracing: true}
);