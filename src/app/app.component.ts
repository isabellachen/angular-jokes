import { Component } from '@angular/core'
import { Joke } from './joke'

@Component({
  selector: 'app-root',
  template: `    
    <div class='container'>
      <h1>Jokes</h1>
      <hero 
        (likedJoke) = "onLiked($event)"
        (dislikedJoke) = "onDisliked($event)">
      </hero>
      <div class= 'wrapper'>
        <app-jokes 
          [componentName]="'Liked Jokes'" 
          [jokes]="likedJokes"
        ></app-jokes>
        <app-jokes 
          [componentName]="'Disliked Jokes'" 
          [jokes]="disLikedJokes"
        ></app-jokes>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
    }
    .wrapper {
       display: flex;
       background-color: navy;
    }
  `]
})
export class AppComponent {
  likedJokes: Joke[] = []
  disLikedJokes: Joke[] = []

  onLiked(joke: Joke) {
    this.likedJokes.push(joke)
  }

  onDisliked(joke: Joke) {
    this.disLikedJokes.push(joke)
  }
}
