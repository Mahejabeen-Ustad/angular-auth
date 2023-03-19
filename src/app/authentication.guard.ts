import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RouterService } from './router.service';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService, private routerService: RouterService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Authentication Gaurd');
     
    const promise = this.authService.isUserAuthenticated
   
     (this.authService.getBearerToken());
     console.log(promise);
        return promise.then(res =>{
          console.log(res);
       
        if(!res){
     this.routerService.routeToLogin()
        }
        return res;
      })
      console.log(promise);

}
  
}
