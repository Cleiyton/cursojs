import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { AuthGuard } from '../guards/auth.guard';
import { CursosGuard } from '../guards/cursos.guard';




const cursosRoutes: Routes = [
    { path: '', component: CursosComponent},
    { path: ':id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },

];

@NgModule({

    imports:[RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]

})
export class cursosRoutingModule{}