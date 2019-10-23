import { Component } from '@angular/core';
import {backlogLabels} from '../backlogLabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  backlogLabels = backlogLabels;
}
