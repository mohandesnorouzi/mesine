import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NewsComponent} from './news/news.component';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {RestaurantServiceComponent} from './restaurant-service/restaurant-service.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {AppGlobals} from './services/app-globals.service';
import {ImagesService} from './services/images.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NewsComponent,
    RestaurantMenuComponent,
    RestaurantServiceComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppGlobals, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
