import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {RestaurantServiceComponent} from './restaurant-service/restaurant-service.component';
import {AppRoutingModule} from './app-routing.module';
import {AppGlobals} from './services/app-globals.service';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {ClickOutsideModule} from 'ng4-click-outside';
import {NewsContentComponent} from './news/news-content/news-content.component';
import {AllNewsComponent} from './news/all-news/all-news.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {CoreModule} from './core/core.module';
import {AboutUsModule} from './about-us/about-us.module';
import {ContactUsModule} from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    RestaurantMenuComponent,
    RestaurantServiceComponent,
    NewsContentComponent,
    AllNewsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatIconModule,
    ClickOutsideModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    CoreModule,
  ],
  providers: [AppGlobals, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
