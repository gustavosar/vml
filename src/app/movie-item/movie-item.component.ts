import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  movielist: any[];
  
  constructor ( private dataService: DataService, private router: Router ) {}
  
  ngOnInit () {
    return this.dataService.getMovies()
    .subscribe(data => this.movielist = data);
  }

  goToMovie(id) {
    this.router.navigate([`/movie-detail/${id}`]);  
  }

}
