import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public MovieDetail:any = [];
  public hideSpinner:boolean=true;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private moviesService : MoviesService,
    private location: Location) { }
  
  ngOnInit() {
    let movieSlug = this.route.snapshot.paramMap.get('slug');
    let moviedetail = this.moviesService.getMovieDetail(movieSlug);
    this.MovieDetail= moviedetail;
    
  }
  backToList(){
    this.location.back();
  }
  deleteMovie(movieId){
    this.hideSpinner = false;
    this.moviesService.deleteMovie(movieId).subscribe(response => {
     // console.log(response,"Response of delete API")
      this.moviesService.deleteFromSession(movieId);
      this.hideSpinner = true;
      this.location.back();
    },error => {
       alert("Service is not available");
       this.location.back();
    });

  }

}
