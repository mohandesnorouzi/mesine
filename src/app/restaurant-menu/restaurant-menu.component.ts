import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {AppGlobals} from '../services/app-globals.service';
import {Desserts, Drinks, MainFoods, Salads, Starters} from '../site.model';
import {Router} from '@angular/router';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  topBannerURL: any;
  viewMode = 'MainFood';
  mainFoodItem: any;
  starterItem: any;
  saladItem: any;
  drinkItem: any;
  dessertItem: any;
  foodPicsItem: any;
  mainFoodArray = [];
  starterArray = [];
  saladArray = [];
  drinkArray = [];
  dessertArray = [];
  foodPicsArray = [];
  public mainFoodNum: any;
  public starterNum: any;
  public saladNum: any;
  public drinkNum: any;
  public dessertNum: any;
  activeCategory = 'mainFood';
  innerWidth: any;
  @ViewChild('myElement') myElement: ElementRef;

  constructor(private dataService: DataService, private appGlobal: AppGlobals, private router: Router
    , private scrollToService: ScrollToService) {
  }

  scrollToMenuList() {
    // const element = document.getElementById('myElement');
    // smoothScroll(element);
    // window.scrollTo(0, 500);
  }

  triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      // container: 'custom-container',
      target: 'MenuSection',
      duration: 3000,
      easing: 'easeOutElastic',
      // offset: 200
    };

    this.scrollToService.scrollTo(config);
  }

  onActiveCategory(value) {
    this.activeCategory = value;
  }


  ngOnInit() {

    // Get top banner from server
    this.dataService.getNewsBanner().subscribe(data => {
      if (data['ok']) {
        this.topBannerURL = this.appGlobal.MediaURL + data['result'][0]['media']['image'];
      }
    }, error => {
      console.log(error);
    });


    // Get main food from server
    this.dataService.getMainFoods().subscribe(data => {
      this.mainFoodNum = data['result'].length;

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.mainFoodItem = new MainFoods(data['result'][i]['info']['title'],
            data['result'][i]['info']['content'],
            this.appGlobal.MediaURL + data['result'][i]['food_pic']['news_card']);

          if (data['result'].length !== 1) {
            this.mainFoodArray.push(this.mainFoodItem);
          } else {
            this.mainFoodArray = [this.mainFoodItem];
          }
        }
      }
      // console.log(this.mainFoodArray);

    }, error => {
      console.log(error);
    });

    // Get main food from server
    this.dataService.getStarters().subscribe(data => {
      this.starterNum = data['result'].length;

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.starterItem = new Starters(data['result'][i]['info']['title'],
            data['result'][i]['info']['content'],
            this.appGlobal.MediaURL + data['result'][i]['food_pic']['news_card']);

          if (data['result'].length !== 1) {
            this.starterArray.push(this.starterItem);
          } else {
            this.starterArray = [this.starterItem];
          }
        }
      }
    }, error => {
      console.log(error);
    });

    // Get main food from server
    this.dataService.getSalads().subscribe(data => {
      this.saladNum = data['result'].length;

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.saladItem = new Salads(data['result'][i]['info']['title'],
            data['result'][i]['info']['content'],
            this.appGlobal.MediaURL + data['result'][i]['food_pic']['news_card']);

          if (data['result'].length !== 1) {
            this.saladArray.push(this.saladItem);
          } else {
            this.saladArray = [this.saladItem];
          }
        }
      }
    }, error => {
      console.log(error);
    });

    // Get main food from server
    this.dataService.getDrinks().subscribe(data => {
      this.drinkNum = data['result'].length;

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.drinkItem = new Drinks(data['result'][i]['info']['title'],
            data['result'][i]['info']['content'],
            this.appGlobal.MediaURL + data['result'][i]['food_pic']['news_card']);

          if (data['result'].length !== 1) {
            this.drinkArray.push(this.drinkItem);
          } else {
            this.drinkArray = [this.drinkItem];
          }
        }
      }
    }, error => {
      console.log(error);
    });

    // Get main food from server
    this.dataService.getDesserts().subscribe(data => {
      this.dessertNum = data['result'].length;

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.dessertItem = new Desserts(data['result'][i]['info']['title'],
            data['result'][i]['info']['content'],
            this.appGlobal.MediaURL + data['result'][i]['food_pic']['news_card']);

          if (data['result'].length !== 1) {
            this.dessertArray.push(this.dessertItem);
          } else {
            this.dessertArray = [this.dessertItem];
          }
        }
      }
    }, error => {
      console.log(error);
    });

    // Get all kind of menu items pictures from server
    this.dataService.getFoodPics().subscribe(data => {
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.foodPicsItem = this.appGlobal.MediaURL + data['result'][i]['food_pic']['file'];

          if (data['result'].length !== 1) {
            this.foodPicsArray.push(this.foodPicsItem);
          } else {
            this.foodPicsArray = [this.foodPicsItem];
          }
        }
      }
    }, error => {
      console.log(error);
    });


  }

}
