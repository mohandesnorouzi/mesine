import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AppGlobals} from '../../services/app-globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topBannerURL: any;

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
  }

}
