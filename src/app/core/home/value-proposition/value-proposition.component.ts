import {Component, OnInit} from '@angular/core';
import {ValueProposition} from '../../../site.model';
import {DataService} from '../../../services/data.service';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrls: ['./value-proposition.component.scss']
})
export class ValuePropositionComponent implements OnInit {

  vpItem: any;
  vpArray = [];

  constructor(private dataService: DataService, private appGlobal: AppGlobals) {
  }

  ngOnInit() {

    // Get value proposition from server
    this.dataService.getValueProposition().subscribe(data => {
      if (data['ok']) {
        for (let i = 0; i < data['result'].length; i++) {
          this.vpItem = new ValueProposition(data['result'][i]['value_proposition_info']['propose_value'],
            this.appGlobal.MediaURL + data['result'][i]['media']['image']);
          this.vpArray.push(this.vpItem);
        }
      }
    }, error => {
      console.log(error);
    });

  }

}
