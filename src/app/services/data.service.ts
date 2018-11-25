import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from './app-globals.service';
import {Router} from '@angular/router';


@Injectable() // This is for let some service injectable in other service
export class DataService {

  constructor(private router: Router, private httpClient: HttpClient,
              private appGlobal: AppGlobals) {
  }

  // getHomePageBanner(): Observable<Blob> {
  //   // return this.httpClient.get(this.appGlobal.httpRequestURL + 'homepage-banner', {responseType: 'blob'});
  //   return this.httpClient.get(this.appGlobal.httpRequestURL + 'homepage-banner', {responseType: 'blob'});
  // }

  getHomePageBanner() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'homepage-banner/', null);
  }

  getServices() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'services/', null);
  }

  getPopularMenu() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'favorite/', null);
  }

  getValueProposition() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'value-proposition/', null);
  }


  getNewsBanner() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'news-banner/', null);
  }

  getNews() {
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'news-card/', null);
  }

  getOneNews(id: string) {
    const data = {id: id};
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'news-content/', data);
  }

}
