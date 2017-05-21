import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../movie/movie-list.component';


const routes: Routes = [
  
  { path: 'home/:movieName',  component:  MovieListComponent }

];

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)

  ],
  exports: [ SearchBarComponent, RouterModule ]
})
export class SearchModule { }
