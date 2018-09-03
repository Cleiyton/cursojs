import { ScursosService } from './scursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scurso',
  templateUrl: './scurso.component.html',
  styleUrls: ['./scurso.component.css'],
  providers: [ScursosService]
})
export class ScursoComponent implements OnInit {

  scurso: string[] = [];

  //scursosService: ScursosService

  constructor(private scursosService: ScursosService) {
    //this.scursosService = _scursosService;
  }

  ngOnInit() {

    this.scurso = this.scursosService.getCursos();
    ScursosService.scriouNovoCurso.subscribe(
      scurso => this.scurso.push(scurso)


    );
  }

}
