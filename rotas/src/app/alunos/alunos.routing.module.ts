;
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

import { AuthGuard } from '../guards/auth.guard'
import { resolve } from 'url';


const alunosRoutes: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard], 
        children: [
            { path: 'novo', component: AlunosFormComponent },
            { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
            { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard] },

        ]
    },


];



@NgModule({

    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]

})
export class AlunosRoutingModule { }