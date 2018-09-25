import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    ComingSoonComponent, FooterComponent,
    HeaderComponent, NavComponent
} from './components';


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ComingSoonComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  exports: [
    ComingSoonComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
})
export class SharedModule { }
