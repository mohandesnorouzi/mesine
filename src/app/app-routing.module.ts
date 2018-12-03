import {Routes, RouterModule} from '@angular/router';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {RestaurantServiceComponent} from './restaurant-service/restaurant-service.component';
import {HomeComponent} from './core/home/home.component';
import {NewsComponent} from './news/news.component';
import {NgModule} from '@angular/core';
import {NewsContentComponent} from './news/news-content/news-content.component';
import {AllNewsComponent} from './news/all-news/all-news.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule'},
  {path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule'},
  {
    path: 'news', component: NewsComponent, children: [
      {path: '', component: AllNewsComponent},
      {path: ':id', component: NewsContentComponent}
    ]
  },
  // {path: 'news/:id', component: NewsContentComponent},
  {path: 'menu', component: RestaurantMenuComponent},
  {path: 'service', component: RestaurantServiceComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}, /*send client to home page when ever he goes to undefined url in site*/
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
