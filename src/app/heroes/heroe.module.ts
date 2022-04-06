import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import {Heroe} from "./heroe/heroe.component"
import { CommonModule } from "@angular/common";


@NgModule({
   declarations:[
       Heroe,
       ListadoComponent
   ],

   exports:[
       ListadoComponent
   ],
   imports:[
       CommonModule
   ]
})

export class HeroeModulo{

}