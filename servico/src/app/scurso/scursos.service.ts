import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class ScursosService {
    emitirScursoCriado = new EventEmitter<string>();
    static scriouNovoCurso = new EventEmitter<string>();
    private scursos: string[] = ['Angular 2', 'Java', 'Phonegap']

    constructor(private logService: LogService ){
        console.log(ScursosService)
    }
    
    getCursos() {
        this.logService.consoleLog('obtendo lista de cursos ')
        return this.scursos;
    }

    addCurso(scurso: string) {
        //usando crase para faze isso
        this.logService.consoleLog(`Criando um novo ${scurso}`)
        this.scursos.push(scurso);

        this.emitirScursoCriado.emit(scurso);
        ScursosService.scriouNovoCurso.emit(scurso)
    }
}