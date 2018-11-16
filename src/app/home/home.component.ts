import {Component, OnInit} from '@angular/core';
import {PopularMenu, Services, ValueProposition} from '../site.model';
import {DataService} from '../services/data.service';
import {AppGlobals} from '../services/app-globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topBannerURL: any;
  vpItem: any;
  serviceItem: any;
  popularMenuItem: any;
  vpArray = [];
  serviceArray = [];
  popularMenuArray = [];


  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }


  ngOnInit() {
    // Get top banner from server
    this.dataService.getHomePageBanner().subscribe(data => {
      if (data['ok']) {
        this.topBannerURL = this.appGlobal.MediaURL + data['result'][0]['media']['image'];
        // console.log(this.imageToShowURL);
        // this.imageToShowURL = 'http://194.135.90.60/Back_end_Media/Media/Screenshot_from_2018-10-25_17-31-43.png';
      }
    }, error => {
      console.log(error);
    });


    // Get value proposition from server
    this.dataService.getValueProposition().subscribe(data => {
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.vpItem = new ValueProposition(data['result'][i]['value_proposition_info']['propose_value'],
            this.appGlobal.MediaURL + data['result'][i]['media']['image']);
          this.vpArray.push(this.vpItem);
        }
      }
    }, error => {
      console.log(error);
    });


    // Get services from server
    this.dataService.getServices().subscribe(data => {
      // console.log(data['result'].length);
      // console.log(data['result']);
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.serviceItem = new Services(data['result'][i]['banner_info']['title'],
            this.appGlobal.MediaURL + data['result'][i]['media']['image']);
          this.serviceArray.push(this.serviceItem);
          // console.log(this.serviceArray);
        }
      }
    }, error => {
      console.log(error);
    });


    // Get popular menu from server
    this.dataService.getPopularMenu().subscribe(data => {
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.popularMenuItem = new PopularMenu(this.appGlobal.MediaURL + data['result'][i]['media']['image']);
          this.popularMenuArray.push(this.popularMenuItem);
        }
      }
    }, error => {
      console.log(error);
    });


  }

}
