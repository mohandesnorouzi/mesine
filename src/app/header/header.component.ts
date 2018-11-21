import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  innerWidth: any;
  canClose: boolean;
  isOpen: boolean;
  @ViewChild('mySideNav') mySideNav: ElementRef;
  @Input() offClick: any;

  constructor(public router: Router) {
  }

  @HostListener('window:resize', ['$event'])
  MobileScreen() {
    this.innerWidth = window.innerWidth;
    return this.innerWidth > 576;
  }


  openNav() {
    this.isOpen = true;
    this.canClose = false;
    document.getElementById('mySideNav').style.width = '250px';
  }

  closeNav() {
    this.isOpen = false;
    document.getElementById('mySideNav').style.width = '0';
  }

  onClickedOutside(e: Event) {
    if (this.isOpen && this.canClose && e.target['className'] !== 'sideNav') {
      this.isOpen = false;
      this.canClose = false;
      this.closeNav();
    } else {
      this.canClose = true;
    }

  }

  ngOnInit() {
  }


}
