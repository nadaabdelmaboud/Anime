import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeResultsService {
  
   length;results;

  constructor() { }
  initResults(ln,res){
    console.log("in res service")
    this.length=ln;
    this.results=res;
    console.log(this.results)
    console.log(this.length)

  }
}
