import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {AppGlobals} from '../services/app-globals.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  topBannerURL: any;

  constructor(private dataService: DataService, private appGlobal: AppGlobals) { }

  ngOnInit() {

    // Get top banner from server
    this.dataService.getNewsBanner().subscribe(data => {
      if (data['ok']) {
        this.topBannerURL = this.appGlobal.MediaURL + data['result'][0]['media']['image'];
      }
    }, error => {
      console.log(error);
    });

  }

}
