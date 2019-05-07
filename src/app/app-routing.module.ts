import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteScholarshipComponent } from './favorite-scholarship/favorite-scholarship.component';

const routes: Routes = [
  { path: '', component: FavoriteScholarshipComponent },
  { path: 'bolsas-favoritas', component: FavoriteScholarshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
