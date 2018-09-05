import { Component, Input } from '@angular/core'
import { Joke } from './joke'


@Component({
  selector: 'app-jokes',
  template: `
    <h1>{{componentName}}</h1>
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

export class JokesComponent {
  @Input() jokes: Joke[]
  @Input() componentName: string
}
