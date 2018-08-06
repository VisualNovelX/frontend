import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";

const routes: Routes = [
  { path: '', component: ComingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
