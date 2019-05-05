import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Move } from '../models/move.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  moves: Move[];

  constructor ( private dataService: DataService ) {}
  
  ngOnInit () {
    return this.dataService.getMoves()
    .subscribe(data => this.moves = data);
  }

}
