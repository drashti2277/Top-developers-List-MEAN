import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DevsService {

  constructor( private http: Http) { }
  getDevs(language: string) {
    return this.http.get('/api/devs/'+language)
        .map(res => res.json());
  }

}
