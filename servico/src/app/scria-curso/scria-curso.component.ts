import { Component, OnInit } from '@angular/core';
import { ScursosService } from '../scurso/scursos.service';

@Component({
  selector: 'app-scria-curso',
  templateUrl: './scria-curso.component.html',
  styleUrls: ['./scria-curso.component.css'],
  providers: [ScursosService]
})
export class ScriaCursoComponent implements OnInit {

  scurso: string[] = [];

  constructor(private scursosServico: ScursosService) { }

  ngOnInit() {

    this.scurso = this.scursosServico.getCursos();
  }


  onAddCurso(scurso: string){
    this.scursosServico.addCurso(scurso)
  }
}
