import { Component, OnInit } from '@angular/core';

interface Personaje{
nombre: string,
poder: number

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje={
     nombre:"Trunks",
     poder: 3000
  }

  agregar(){
     console.log(this.nuevo)
  }


}
