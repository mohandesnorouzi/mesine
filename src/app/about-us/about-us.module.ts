import {NgModule} from '@angular/core';
import {AboutUsComponent} from './about-us.component';
import {AboutUsRoutingModule} from './about-us-routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule {
}
