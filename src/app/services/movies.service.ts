
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service'
import { Constants } from '../constant/constants'
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public movieDetail: any = [];

  constructor(private restService: RestService,@Inject(SESSION_STORAGE) private storage: StorageService) { }
  public getMovies(): Observable<any> {
    console.log(Constants.ITEM_URL,"URL");
    return this.restService.get(Constants.ITEM_URL);
  }
  public deleteMovie(movieId):Observable<any>{
    return this.restService.delete(Constants.ITEM_URL.concat(movieId)); 
  }
  public deleteFromSession(movieId){
    let updatedList= this.storage.get('data').filter((item) => item._id !== movieId);
    console.log(updatedList);
    this.storage.set("data",updatedList);
  }
  public getMovieDetail(slug){
    let movie 
    this.storage.get('data').forEach(element => {
      if(element.slug === slug){
          movie = element;
      }
    });
    if(movie){
      return movie;
    }

  }

}
