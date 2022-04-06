import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  

  constructor() {
    
   }

  ngOnInit(): void {
  }
  heroeBorrado:string="";
  heroes: string[]=["Spiderman ", "Iroman" , "Hulk" , "goku"];

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift() || "";
    console.log("borrando..")
  }
}
