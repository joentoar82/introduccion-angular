
import { Component } from '@angular/core';


@Component({
    selector: 'app-contador', //nombre personalizado
    //se corta y pega el contenido de app.component.html
    template: `
        
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong> </h3>

        <button (click)="acumular(base)">+{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">-{{base}}</button>
    
    `
})

export class ContadorComponent{
//código del archivo app.component.ts    
    titulo:string = 'Hola proyecto';
    numero:number = 10;
    base:number = 5;

    acumular(valor:number){
        this.numero += valor;
    }
}