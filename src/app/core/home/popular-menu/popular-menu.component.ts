import {Component, OnInit} from '@angular/core';
import {PopularMenu} from '../../../site.model';
import {DataService} from '../../../services/data.service';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.scss']
})
export class PopularMenuComponent implements OnInit {

  popularMenuItem: any;
  popularMenuArray = [];

  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }

  ngOnInit() {

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
