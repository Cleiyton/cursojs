import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
    {path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule', canActivate:[AuthGuard], 
    canActivateChild:[CursosGuard], canLoad:[AuthGuard]},
    {path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate:[AuthGuard],
    canLoad:[AuthGuard]},

   // { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard], canActivateChild: [CursosGuard] },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
   // { path: 'alunos', component: CursosComponent, canActivate: [AuthGuard], canActivateChild: [AlunosGuard] },
    { path: 'login', component: LoginComponent},
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];



@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }