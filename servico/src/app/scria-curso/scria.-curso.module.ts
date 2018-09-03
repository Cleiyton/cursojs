import { CommonModule } from '@angular/common';
import { ScursosService } from '../scurso/scursos.service';
import { NgModule } from '@angular/core';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';



import { ScriaCursoComponent } from './scria-curso.component';

@NgModule({
  declarations: [
    ScriaCursoComponent,
    ReceberCursoCriadoComponent
    
  ],
  imports: [
    CommonModule
  ],

  exports: [ScriaCursoComponent],
  //providers: [ScursosService],

})
export class ScriaCursoModule { }
