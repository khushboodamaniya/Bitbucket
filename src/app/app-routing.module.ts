import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieContinerComponent } from './component/movie-continer/movie-continer.component';
const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MovieContinerComponent,data: { animation: 'tiger' }
  },
  {
    path: 'details/:slug', component: MovieDetailComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
