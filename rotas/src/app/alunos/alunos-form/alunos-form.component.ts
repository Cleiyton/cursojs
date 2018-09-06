import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  aluno: any= {};
  inscricao: Subscription;


  constructor(private route: ActivatedRoute, 
  private alunoService: AlunosService) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any)=>{ 
        let id = params['id']; 
        
        
        this.aluno = this.alunoService.getAluno(id);


        if(this.aluno === null){
          this.aluno= {};
        }
       });

    
  }


  ngOnDestroy(){

    this.inscricao.unsubscribe();
  }

}
