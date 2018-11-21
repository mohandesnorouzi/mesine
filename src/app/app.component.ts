import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Icons} from './services/Icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    const icons = new Icons();
    icons.icons(this.matIconRegistry, this.domSanitizer);
  }

  title = 'Mesineh';
}
