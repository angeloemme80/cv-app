import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EsperienzeService {
  
    constructor(private http: HttpClient) { }

    getEsperienze() {
        //console.log('dentro il service');
        return this.http.get('assets/esperienze.json');
    }

}
