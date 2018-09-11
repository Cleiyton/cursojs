import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {


       // console.log(route);
       // console.log(state);

        if(state.url.includes('editar')){
           // alert('usuario sem acesso')
            //return false;
        }

        return true;

    }

}