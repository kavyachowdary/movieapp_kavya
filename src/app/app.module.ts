import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule,MdGridListModule, MdCardModule, MdMenuModule, MdToolbarModule,
 MdIconModule, MdInputModule} from '@angular/material';
import { MovieService } from './movie/movie.service';
import { MovieModule } from './movie/movie.module';
import { SearchModule } from './search-bar/search-bar.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Router }from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule, 
    MdGridListModule,
    
    MovieModule,
    SearchModule,
      RouterModule
  ],
  exports: [BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule, 
    MdGridListModule,
    MdInputModule,
 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
