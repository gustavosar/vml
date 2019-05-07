import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie.model';
import { Crew } from './models/crew.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=777abf45847b76e7a1025f699bc71b0e&language=en-US&page=1'
  apiUrlById = 'https://api.themoviedb.org/3/movie/{{id}}?api_key=777abf45847b76e7a1025f699bc71b0e'

  constructor ( private _http: HttpClient ) {}

  getMovies () {
      return this._http.get<Movie[]>(this.apiUrl);
  }

  getMovieById (id) {
    return this._http.get<Movie[]>(this.apiUrlById.replace('{{id}}', id));
  } 
  getMovieCredit(id) {
    return this._http.get<Crew[]>(this.apiUrlById.replace('{{id}}', id + "/credits" ) );
  } 
  getMovieReview (id) {
    return this._http.get<Movie[]>(this.apiUrlById.replace('{{id}}' + '/review', id));
  } 

}