import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Move } from './models/move.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=777abf45847b76e7a1025f699bc71b0e&language=en-US&page=1'

  constructor ( private _http: HttpClient ) {}

  getMoves () {
      return this._http.get<Move[]>(this.apiUrl);

  }
/*   getMoveById (id) {
    return this._http.get<any[]>(this.apiUrl);

} */


}