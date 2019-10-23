import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DataService} from '../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './loadSports.component.html'
})


export class LoadSportsComponent implements OnInit {

  constructor(
    private dataService: DataService){}

    ngOnInit(){
      return this.dataService.getSports();
    }


}
