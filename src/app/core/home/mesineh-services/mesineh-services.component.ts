import {Component, OnInit} from '@angular/core';
import {Services} from '../../../site.model';
import {DataService} from '../../../services/data.service';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-mesineh-services',
  templateUrl: './mesineh-services.component.html',
  styleUrls: ['./mesineh-services.component.scss']
})
export class MesinehServicesComponent implements OnInit {

  serviceItem: any;
  serviceArray = [];

  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }

  ngOnInit() {

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

  }

}
