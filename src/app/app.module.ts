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
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {ClickOutsideModule} from 'ng4-click-outside';
import {NewsContentComponent} from './news/news-content/news-content.component';
import {AllNewsComponent} from './news/all-news/all-news.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

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
    FooterComponent,
    NewsContentComponent,
    AllNewsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ClickOutsideModule,
    ScrollToModule.forRoot()
  ],
  providers: [AppGlobals, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
