import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  p: number = 1;
  movielist: any;
  totalMovies: number = 0;
  
  constructor ( private dataService: DataService, private router: Router ) {}
  
  ngOnInit () {
    console.log(this.p);
    this.carregaListaFilmes(this.p);
  }

  pageChanged(page)
  {
    this.carregaListaFilmes(page);
  }

  carregaListaFilmes(page)
  {
    this.p = page;
    this.dataService.getMovies(this.p)
    .subscribe(data => {
      console.log(data);
      this.totalMovies = data.total_results;
      this.movielist = data.results;
    });
  }

  goToMovie(id) {
    this.router.navigate([`/movie-detail/${id}`]);  
  }

}
