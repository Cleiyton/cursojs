import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  curso = ["angular", "Java"];

  constructor() { }

  ngOnInit() {

    for(let i =0; i<this.curso.length;i++ ){
      let curso = this.curso[i];

    }
  }

}
