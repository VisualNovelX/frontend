import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from "./blog/blog.module";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { NavModule } from "./nav/nav.module";
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    FooterModule,
    HeaderModule,
    NavModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
