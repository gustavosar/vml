import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../models/movie.model';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  movies: Movie[];
  
  constructor ( private dataService: DataService ) {}
  
  ngOnInit () {
    return this.dataService.getMovies()
    .subscribe(data => this.movies = data);
  }


}
