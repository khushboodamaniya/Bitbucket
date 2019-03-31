import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieContinerComponent } from './component/movie-continer/movie-continer.component';
import { RestService } from './services/rest.service';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NotAvailableComponent } from './component/not-available/not-available.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieContinerComponent,
    NotAvailableComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StorageServiceModule,
    BrowserAnimationsModule
  ],
  providers: [RestService,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
