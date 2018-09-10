import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/alunos.guard';


const alunosRoutes: Routes = [
    {
        path: 'alunos', component: AlunosComponent,canActivate:[AuthGuard], canActivateChild:[AlunosGuard],
        children: [
            { path: 'novo', component: AlunosFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunosFormComponent },

        ]
    },


];



@NgModule({

    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]

})
export class AlunosRoutingModule { }