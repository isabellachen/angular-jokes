import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { LikedJokesComponent } from './liked-jokes.component';
import { DislikedJokesComponent } from './disliked-jokes.component';

import { ApiClientService } from './api-client.service'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LikedJokesComponent,
    DislikedJokesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
