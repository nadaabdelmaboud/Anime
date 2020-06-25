import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeFormComponent } from './anime-form/anime-form.component';
import { AnimeResultsComponent } from './anime-results/anime-results.component';
import {AnimeResultsService} from './anime-results.service'
import {AnimeFormService} from './anime-form.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnimeFormComponent,
    AnimeResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule      
  ],
  providers: [AnimeResultsService,AnimeFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
