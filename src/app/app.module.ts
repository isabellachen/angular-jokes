import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { JokesComponent } from './jokes.component';

import { ApiClientService } from './api-client.service'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
