import {Routes, RouterModule} from '@angular/router';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RestaurantServiceComponent} from './restaurant-service/restaurant-service.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us/contact-us.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'menu', component: RestaurantMenuComponent},
  {path: 'service', component: RestaurantServiceComponent},
  {path: '**', redirectTo: ''}, /*send client to home page when ever he goes to undefined url in site*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
