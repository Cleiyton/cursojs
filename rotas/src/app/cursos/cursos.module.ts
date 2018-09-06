
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from "./cursos.service";
import { cursosRoutingModule } from "./cursos.routing.module";
//import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        cursosRoutingModule
       // RouterModule

    ],
    exports: [],
    declarations: [

        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService],

})
export class CursosModule { }