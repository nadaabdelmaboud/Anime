import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeFormComponent } from './anime-form/anime-form.component';
import { AnimeResultsComponent } from './anime-results/anime-results.component';

const routes: Routes = [{
      path: '', 
      component: AnimeFormComponent,
      pathMatch: 'full'
 
},{
      path: 'animeResults', 
      component: AnimeResultsComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
