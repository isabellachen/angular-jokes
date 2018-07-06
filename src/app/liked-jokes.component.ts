import { Component, Input } from '@angular/core'
import { Joke } from './joke'


@Component({
  selector: 'liked-jokes',
  template: `
    <h1>Liked</h1>
    <ul>
      <li *ngFor="let joke of jokes">
        {{joke}}
      </li>
    </ul>
  `,
  styles: [`
    :host {
      background-color: salmon;
      flex-grow: 1;
    }
  `]
})

export class LikedJokesComponent {
  @Input() jokes: Joke[]
}
