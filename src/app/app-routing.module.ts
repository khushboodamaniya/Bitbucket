import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieContinerComponent } from './component/movie-continer/movie-continer.component';
import { NotAvailableComponent } from './component/not-available/not-available.component'
const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MovieContinerComponent,data: { animation: 'Slide' }
  },
  {
    path: 'details/:slug', component: MovieDetailComponent
  },
  {path: '404', component: NotAvailableComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
