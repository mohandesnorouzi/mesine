import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {AppGlobals} from '../services/app-globals.service';
import {News} from '../site.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  topBannerURL: any;
  newsItem: any;
  newsArray = [];
  public newsCardNum: any;

  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }

  // Sort data on date and time
  dateTimeSort(a, b) {
    return new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime();
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


    // Get news card from server
    this.dataService.getNews().subscribe(data => {
      this.newsCardNum = data['result'].length;
      // console.log(this.newsCardNum);

      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.newsItem = new News(data['result'][i]['news_info']['title'],
            data['result'][i]['news_info']['text'],
            this.appGlobal.MediaURL + data['result'][i]['news_card']['file'],
            data['result'][i]['news_info']['date'], data['result'][i]['news_info']['time']);

          if (data['result'].length !== 1) {
            this.newsArray.push(this.newsItem);
          } else {
            this.newsArray = this.newsItem;
          }
        }
        // this.newsArray.sort((a, b) =>
        //   new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime());

        this.newsArray.sort(this.dateTimeSort);
        console.log(this.newsArray);
      }
    }, error => {
      console.log(error);
    });


  }

}
