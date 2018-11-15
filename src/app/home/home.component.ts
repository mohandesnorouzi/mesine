import {Component, OnInit} from '@angular/core';
import {PopularMenu, Services, ValueProposition} from './home.model';
import {ImagesService} from '../services/images.service';
import {AppGlobals} from '../services/app-globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topBannerURL: any;
  service: any;
  serviceArray = [];

  vp: ValueProposition[] = [
    new ValueProposition('نان تنوری تازه',
      '/assets/imgs/bread.svg'),
    new ValueProposition('موسیقی زنده',
      '/assets/imgs/tur.svg'),
    new ValueProposition('غذاهای اصیل ایرانی',
      '/assets/imgs/iranian food.svg')
  ];

  // service: Services[] = [
  //   new Services('سالن',
  //     '/assets/imgs/2.jpg'),
  //   new Services('مجالس و مهمانی ها در سالن',
  //     '/assets/imgs/3.jpg'),
  //   new Services('عذای پرسنل شرکت ها',
  //     '/assets/imgs/4.jpg'),
  //   new Services('بیرون بر',
  //     '/assets/imgs/5.jpg')
  // ];


  popularMenu: PopularMenu[] = [
    new Services('سالن',
      '/assets/imgs/6.jpg'),
    new Services('مجالس و مهمانی ها در سالن',
      '/assets/imgs/7.jpg'),
    new Services('عذای پرسنل شرکت ها',
      '/assets/imgs/8.jpg'),
    new Services('بیرون بر',
      '/assets/imgs/9.jpg'),
    new Services('بیرون بر',
      '/assets/imgs/10.jpg'),
    new Services('بیرون بر',
      '/assets/imgs/11.jpg')
  ];


  constructor(private imageService: ImagesService, private appGlobal: AppGlobals) {
  }


  ngOnInit() {
    // Get top banner from server
    this.imageService.getHomePageBanner().subscribe(data => {
      if (data['ok']) {
        this.topBannerURL = this.appGlobal.MediaURL + data['result'][0]['media']['image'];
        // console.log(this.imageToShowURL);
        // this.imageToShowURL = 'http://194.135.90.60/Back_end_Media/Media/Screenshot_from_2018-10-25_17-31-43.png';
      }
    }, error => {
      console.log(error);
    });

    // Get services from server
    this.imageService.getServices().subscribe(data => {
      console.log(data['result'].length);
      console.log(data['result']);
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.service = new Services(data['result'][i]['banner_info']['title'],
            this.appGlobal.MediaURL + data['result'][i]['media']['image']);
          this.serviceArray.push(this.service);
          // console.log(this.serviceArray);
        }
      }
    }, error => {
      console.log(error);
    });
  }

}
