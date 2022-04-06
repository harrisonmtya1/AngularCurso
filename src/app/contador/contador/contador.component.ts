import { Component } from "@angular/core";

@Component({
    selector: "contador",
    template: `

    <h1>{{title}}</h1>

<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(base)">+{{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)">-{{base}}</button>
`

})

export class ContadorComponet {
    title = 'Contador App';
    numero:number = 0;
    base:number = 5;
  
    acumular( valor:number){
      this.numero +=valor;
    }
}