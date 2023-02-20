import { Injectable } from '@angular/core';
import { TempJson } from './tempJson';
import { TEMPJSON } from './mock-tempJson';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  private tempUrl1 = 'https://api.open-meteo.com/v1/forecast?latitude=';
  private tempUrl2 = '&longitude=';
  private tempUrl3 = '&daily=weathercode&timezone=Europe%2FBerlin';
  constructor(private http: HttpClient) { }

  getTemperatures(lat: Number, lon:Number): Observable<String> {
    //const tmp =of(TEMPJSON)
    //return tmp;
    const tempUrl=this.tempUrl1+lat+this.tempUrl2+lon+this.tempUrl3;
    return this.http.get<String>(tempUrl)
  }
}
