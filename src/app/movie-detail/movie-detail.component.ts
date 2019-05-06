import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

@Injectable()
export class MovieDetailComponent implements OnInit {

  movies: Movie[];
  Movie: any = {};

  constructor ( private dataService: DataService ) {

  }
  
  ngOnInit () {
    return this.dataService.getMovies()
    .subscribe((data: {}) => { this.movies = data });

  }


}