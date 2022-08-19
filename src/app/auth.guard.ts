import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string) {
        if(!this.isLoggedIn()) {
            this.router.navigate(['/reactive-login'])
            return false;
        } else if(this.isLoggedIn()) {
            return true;
        } else {
            return false;
        }
    }

    isLoggedIn() {
        let status  = false;
        if(localStorage.getItem("isLoggedIn") == "true") {
            status = true;
        } else {
            status = false
        }
        return status;
    }
    
}