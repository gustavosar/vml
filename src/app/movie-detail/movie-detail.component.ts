import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

@Injectable()
export class MovieDetailComponent implements OnInit {

  movies: Movie[];
  id: string;

  constructor (private dataService: DataService, private route: ActivatedRoute,) {
    route.params.subscribe(() => {
      this.id = this.route.snapshot.paramMap.get('id');
    });
  }
  
  ngOnInit () {
    return this.dataService.getMovieById(this.id)
    .subscribe(data => this.movies = data);
  }

}
