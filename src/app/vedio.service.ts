import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vedio } from './vedio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VedioService {
    git: Vedio;

    constructor(private http: HttpClient) {
        this.git = new Vedio();
    }
    
    //getting records from videosList
    getVedios(): Observable<Array<any>> {
      return this.http.get<Array<any>>('http://localhost:3000/api/v1/videosList');
    }

    //adding favourite into db.json
    addFavourite(obj): Observable<any> {
      return this.http.post<any>('http://localhost:3000/api/v1/favoriteList', obj);
    }

    //reteiving favourite data from db.json file
    getFavourite(): Observable<Array<any>> {
      return this.http.get<Array<any>>('http://localhost:3000/api/v1/favoriteList');
    }

    //deleting from db.json
    delete(id):Observable<{}> {
      return this.http.delete('http://localhost:3000/api/v1/favoriteList'+'/'+id);
    }
  
  


}


