import { Component, Input  } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router }            from '@angular/router';
import { Movie } from '../movie/movie';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']

})
export class SearchBarComponent {

movie: Movie[];
  

  constructor(private router : Router) { }
  searchMovie(movieName: string): void {
        console.log(movieName);
    this.router.navigate(['home', movieName]);

  };
 
}

