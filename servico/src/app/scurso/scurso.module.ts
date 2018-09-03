import { CommonModule } from '@angular/common';
import { ScursosService } from './scursos.service';
import { NgModule } from '@angular/core';



import { ScursoComponent } from './scurso.component';

@NgModule({
  declarations: [
    ScursoComponent
  ],
  imports: [
   CommonModule
  ],

  exports:[ScursoComponent],
  //providers: [ScursosService],
 
})
export class ScursoModule{ }
