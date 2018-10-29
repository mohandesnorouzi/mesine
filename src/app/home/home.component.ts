import {Component, OnInit} from '@angular/core';
import {PopularMenu, Services, ValueProposition} from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vp: ValueProposition[] = [
    new ValueProposition('نان تنوری تازه',
      '/assets/imgs/bread.svg'),
    new ValueProposition('موسیقی زنده',
      '/assets/imgs/tur.svg'),
    new ValueProposition('غذاهای اصیل ایرانی',
      '/assets/imgs/iranian food.svg')
  ];

  service: Services[] = [
    new Services('سالن',
      '/assets/imgs/2.jpg'),
    new Services('مجالس و مهمانی ها در سالن',
      '/assets/imgs/3.jpg'),
    new Services('عذای پرسنل شرکت ها',
      '/assets/imgs/4.jpg'),
    new Services('بیرون بر',
      '/assets/imgs/5.jpg')
  ];


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


  constructor() {
  }

  ngOnInit() {
  }

}
