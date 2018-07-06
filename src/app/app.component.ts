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
        <liked-jokes [jokes]="likedJokes"></liked-jokes>
        <disliked-jokes [jokes]="disLikedJokes"></disliked-jokes>
      </div>
    </div>
  `,
  styles: [ `
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
