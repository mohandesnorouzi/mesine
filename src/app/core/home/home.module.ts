import {NgModule} from '@angular/core';
import {ValuePropositionComponent} from './value-proposition/value-proposition.component';
import {PopularMenuComponent} from './popular-menu/popular-menu.component';
import {MesinehServicesComponent} from './mesineh-services/mesineh-services.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ValuePropositionComponent,
    PopularMenuComponent,
    MesinehServicesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  // exports: [
  //   HomeComponent
  // ]
})
export class HomeModule {
}
