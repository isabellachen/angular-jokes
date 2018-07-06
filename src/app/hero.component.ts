import { Component, Output, EventEmitter } from '@angular/core'
import { ApiClientService } from './api-client.service'
import { Joke } from './joke'

@Component({
  selector: 'hero',
  template: `
    <h1>Hero</h1>
    <div *ngIf="joke">{{joke}}</div>
    <button (click)="like()">Like</button>
    <button (click)="dislike()">Dislike</button>
  `,
  styles: [`
    :host {
      background-color: lime;
    }
  `]
})
export class HeroComponent {
  joke: Joke
  @Output() likedJoke = new EventEmitter<any>()
  @Output() dislikedJoke = new EventEmitter<any>()

  constructor(
    private client: ApiClientService,
  ) { }

  ngOnInit() {
    this.getJoke()
  }

  like(event): void {
    this.likedJoke.emit(this.joke)
    this.getJoke()
  }

  dislike(event): void {
    this.dislikedJoke.emit(this.joke)
    this.getJoke()
  }

  getJoke(): Promise<any> {
    return this.client.getJoke()
      .then(joke => this.joke = joke.joke)
  }

}
