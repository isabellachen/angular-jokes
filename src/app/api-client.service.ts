import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root',
})

export class ApiClientService {
  private baseUrl: string = 'http://api.icndb.com/jokes'

  getJoke (): Promise<any> {
    return fetch(`${this.baseUrl}/random`)
      .then(res => res.json())
      .then(res => res.value)
  }
}