import { Component, Input } from '@angular/core'
import { Joke } from './joke'

@Component({
  selector: 'disliked-jokes',
  template: `
    <div class='liked-container'>
      <h1>Disliked</h1>
      <ul>
      <li *ngFor="let joke of jokes">
        {{joke}}
      </li>
    </ul>
    </div>
  `,
  styles: [`
    :host {
      background-color: pink;
      flex-grow: 1;
    }
  `]
})
export class DislikedJokesComponent {
  @Input() jokes: Joke[]
}
