import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../../Services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this will be passed from the route config
    // on the data property    
    const expectedRole = next.data.expectedRole;
    //const currentUser = this.authService.isUserAdmin;    //.currentUserValue;
    //if (currentUser) {
    //  // check if route is restricted by role
    //  if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
    //    // role not authorised so redirect to home page
    //    this.router.navigate(['/']);
    //    return false;
    //  }

    //  // authorised so return true
    //  return true;
    //}
    const url: string = state.url;    
    if (this.authService.isUserAdmin()) {      
      return this.checkLogin(url);      
    }
    return this.checkLogin(url); //this.router.navigate(["/login"]);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    const url: string = state.url;    
    return this.checkLogin(url);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    //return true;
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;
    
    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
