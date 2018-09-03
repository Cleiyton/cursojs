import { LogService } from './shared/log.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScursoModule } from './scurso/scurso.module';
import { ScriaCursoModule } from './scria-curso/scria.-curso.module';
import { ScursosService } from './scurso/scursos.service';



@NgModule({
  declarations: [
    AppComponent,

  
  ],
  imports: [
    BrowserModule,
    ScriaCursoModule,
    ScursoModule
  ],
  
  //providers: [ScursosService],
  providers:[LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
