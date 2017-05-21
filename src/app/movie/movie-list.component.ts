import { Component, Input, OnInit} from '@angular/core';
import { MovieService } from './movie.service';
import { MovieModule } from './movie.module';
import { Router }            from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from './movie';
import 'rxjs/add/operator/switchMap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit {



  movie : Movie[];
  

  constructor( private movieService: MovieService ,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(params['movieName']))
      .subscribe(movie => this.movie = movie);
  }

  
    
  }


