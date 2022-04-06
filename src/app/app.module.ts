import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModulo } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroeModulo } from './heroes/heroe.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroeModulo,
    ContadorModulo,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
