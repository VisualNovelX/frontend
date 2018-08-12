import { NgModule } from '@angular/core';
import { HomeView } from 'views/home/home.view';
import { ComponentsModule } from 'components/components.module';

@NgModule({
  declarations: [
    HomeView
  ],
  imports: [
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [HomeView]
})
export class ViewsModule { }
