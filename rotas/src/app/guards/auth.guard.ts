import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Route } from '../../../node_modules/@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {



  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('AuthGuard');
    return this.verificarAcesso();

  }

    private verificarAcesso(){
      if (this.authService.usuarioEstaAutenticado()) {
        return true
      }
  
  
        this.router.navigate(['/login'])
  
  
      return false;
      
    }
  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    
      console.log('canLoad: verificando se o usuario pode carregar o codigo do modulo ');

      return this.verificarAcesso();
    }

}
