import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list.component';

import { MovieService } from './movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule,MdGridListModule, 
  MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { RouterModule,Routes }            from '@angular/router';
@NgModule({
  declarations: [
    
   MovieListComponent
  ],
 imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,MdGridListModule,
    CommonModule
  ],
  providers: [ MovieService, RouterModule ],
  exports: [BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule],

})
export class MovieModule { }

