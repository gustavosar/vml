import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Crew } from '../models/crew.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  crews: Crew[];
  id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute,) {
    route.params.subscribe(() => {
      this.id = this.route.snapshot.paramMap.get('id');
    });
  }

  ngOnInit() {
    return this.dataService.getMovieCredit(this.id)
    .subscribe(data => this.crews = data);
  }

}
