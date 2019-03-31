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
  constructor(private route: ActivatedRoute,
    private router: Router,
    private moviesService : MoviesService,
    private location: Location) { }
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('slug');
    console.log(id,"id");
    let moviedetail = this.moviesService.getMovieDetail(id);
    this.MovieDetail= moviedetail;
    console.log(moviedetail,"moviedetail" , this.MovieDetail);
  }
  backToList(){
    this.location.back();
  }
  deleteMovie(movieId){
    this.moviesService.deleteMovie(movieId).subscribe(response => {
      console.log(response,"Response of delete API")
      this.moviesService.deleteFromSession(movieId);
      this.location.back();
    })

  }

}
