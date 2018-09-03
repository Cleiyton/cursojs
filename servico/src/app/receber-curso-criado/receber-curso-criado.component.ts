
import { ScursosService } from '../scurso/scursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})

// o pai dele que e o scria-curso como receber-curso e filho ele automaticamente recebe os servico
//que esta declarado em @componet
export class ReceberCursoCriadoComponent implements OnInit {

  scurso: string;

  constructor(private scursosServico: ScursosService) { }

  ngOnInit() {

    this.scursosServico.emitirScursoCriado.subscribe(

      cursoCriado=> this.scurso = cursoCriado

    );
  }

}
