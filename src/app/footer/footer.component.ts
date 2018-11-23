import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  innerWidth: any;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  BiggerThanTablet() {
    this.innerWidth = window.innerWidth;
    return this.innerWidth > 768;
  }

  Tablet() {
    this.innerWidth = window.innerWidth;
    return (this.innerWidth <= 768 && this.innerWidth > 576);
  }

  Mobile() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    return this.innerWidth <= 576;
  }


  ngOnInit() {
  }

}
