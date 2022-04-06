import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponet } from "./contador/contador.component";

@NgModule({
    declarations:[
        //aqui van los componentes del modulo
        ContadorComponet
    ],
    exports:[
        //aca exporto el modulo para poderlo usar por fuera
        ContadorComponet
    ],
    imports:[
        CommonModule
    ]
})


export class ContadorModulo{
    
}