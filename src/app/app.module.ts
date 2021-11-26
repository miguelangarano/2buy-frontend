import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnPinkComponent } from './btn-pink/btn-pink.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnPinkComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
