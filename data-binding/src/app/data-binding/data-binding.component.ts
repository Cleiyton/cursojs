import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string= "http://loiane.com"

  cursoAngular: boolean = true;

  urlImagem:string = 'https://s2.glbimg.com/tLXQrHyP20CDJBCPBChJJcmcC88=/e.glbimg.com/og/ed/f/original/2018/04/06/eso1810a.jpg'

  getValor(){
    return 1;
  }

  getCurso(){
   return true;
  }

  constructor() { }


  ngOnInit() {
  }

}
