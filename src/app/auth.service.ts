import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  isUserAuthenticated(token:string): Promise<boolean>{
    return this.http.post<boolean>('http://localhost:3000/auth/v1/isAuthenticated',{},{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).pipe(map(res =>res['isAuthenticated'])
    ).toPromise<boolean>();
  }


  authenticatedUser(loginuser:any){
    console.log("authenticated user function",loginuser);
    return this.http.post('http://localhost:3000/auth/v1',loginuser);
  }

  setBearerToken(token:string){
    localStorage.setItem('bearerToken',token);
  }
  getBearerToken(){
    return localStorage.getItem('bearerToken')
  }

  
}
