import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {AppGlobals} from '../services/app-globals.service';
import {AboutUs, News} from '../site.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  topBannerURL: any;
  aboutUsItem: any;
  aboutUsText: any;
  aboutUsImage1: any;
  aboutUsImage2: any;

  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }

  ngOnInit() {

    // Get top banner from server
    this.dataService.getAboutUsBanner().subscribe(data => {
      if (data['ok']) {
        this.topBannerURL = this.appGlobal.MediaURL + data['result'][0]['media']['image'];
      }
    }, error => {
      console.log(error);
    });


    // Get  about us from server
    this.dataService.getAboutUs().subscribe(data => {

      if (data['ok']) {
        this.aboutUsText = data['result'][0]['banner_info']['text'];
        this.aboutUsImage1 = this.appGlobal.MediaURL + data['result'][0]['media1']['image'];
        this.aboutUsImage2 = this.appGlobal.MediaURL + data['result'][0]['media2']['image'];
        console.log(this.aboutUsImage1);
        // this.aboutUsItem = new AboutUs(data['result'][0]['banner_info']['text'],
        //   this.appGlobal.MediaURL + data['result'][0]['media1']['image'],
        //   this.appGlobal.MediaURL + data['result'][0]['media2']['image']);
      }
    }, error => {
      console.log(error);
    });


  }

}
