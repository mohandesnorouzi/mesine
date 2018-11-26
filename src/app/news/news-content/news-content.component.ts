import {Component, OnInit} from '@angular/core';
import {OneNews} from '../../site.model';
import {DataService} from '../../services/data.service';
import {AppGlobals} from '../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {

  topBannerURL: any;
  content: any;
  title: any;
  ctaBannerURL: any;
  ctaTitle: any;
  newsItem: any;

  constructor(private dataService: DataService, private appGlobal: AppGlobals, private router: Router) {

    const newsID = this.router.url.split('/')[2];

    // Get news content from server
    this.dataService.getOneNews(newsID).subscribe(data => {
      if (data['ok']) {
        this.newsItem = new OneNews(data['result'][0]['info']['title'],
          data['result'][0]['info']['text'],
          this.appGlobal.MediaURL + data['result'][0]['news_pic']['news_pic']['file'],
          data['result'][0]['info']['date'], data['result'][0]['info']['time']);
        this.topBannerURL = this.newsItem['imagePath'];
        this.content = this.newsItem['content'];
        this.title = this.newsItem['title'];
        this.ctaBannerURL = this.appGlobal.MediaURL + data['result'][0]['marketing_pic']['marketing_pic']['file'];
        this.ctaTitle = data['result'][0]['marketing_pic']['marketing_pic']['title'];

      }
    }, error => {
      console.log(error);
    });

  }


  ngOnInit() {


  }

}
