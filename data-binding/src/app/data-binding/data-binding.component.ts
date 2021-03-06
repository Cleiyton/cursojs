import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  /*styles: [
    `
      .highlight{
        background-color: yellow;
        font-weight: bold
      }
    `
  ]*/
})


export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com"

  cursoAngular: boolean = true;

  urlImagem: string = 'https://s2.glbimg.com/tLXQrHyP20CDJBCPBChJJcmcC88=/e.glbimg.com/og/ed/f/original/2018/04/06/eso1810a.jpg'

  nomeDocurso:string = "angular";
  
  valorInicial = 15;

  valorAtual: String = "";

  ValorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'cleiton',
    idade: 22

  }

  onMouseOverOut() {

    this.isMouseOver = !this.isMouseOver;

  }
  salvarValor(valor) {

    this.ValorSalvo = valor;

  }

  getValor() {
    return 1;
  }

  getCurso() {
    return true;
  }

  botaoClicado() {
    alert("botão clicado")
  }

  onKeyUp(evento: KeyboardEvent) {

    this.valorAtual = (<HTMLInputElement>evento.target).value

  }

  onMudouValor(evento) {
    console.log(evento.novoValor)
  }

  constructor() { }


  ngOnInit() {
  }

}
