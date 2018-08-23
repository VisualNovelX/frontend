import { NgModule } from '@angular/core';
import { 
    ComingSoonComponent, FooterComponent, 
    HeaderComponent, NavComponent 
} from './components';


@NgModule({
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