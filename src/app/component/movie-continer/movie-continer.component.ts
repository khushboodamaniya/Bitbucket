import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import { RouterModule, Router, Event as NavigationEvent } from '@angular/router';
@Component({
  selector: 'app-movie-continer',
  templateUrl: './movie-continer.component.html',
  styleUrls: ['./movie-continer.component.scss']
})
export class MovieContinerComponent implements OnInit {

  constructor(private moviesService: MoviesService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }
  public data:any =[];
  ngOnInit() {
    if(this.storage.get('data')){
      this.data = this.storage.get('data')
    }
    else{
    this.moviesService.getMovies().subscribe(movies => {
     // console.log(movies,"movies");
      this.data = movies;
      this.storage.set('data',movies);
    },error => {
      this.router.navigateByUrl('404');
      //alert("Service is not available");
      
   });
  }
  }
}
