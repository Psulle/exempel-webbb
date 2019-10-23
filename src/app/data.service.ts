import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sport} from './loadSports/sport.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/all';
  constructor(private _http: HttpClient) { }

  getSports(){
    return this._http.get<sport[]>(this.apiUrl);
  }
}
