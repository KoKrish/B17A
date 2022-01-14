import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search = new BehaviorSubject<string>("");
  public filter = new BehaviorSubject<any>([]);
  public price = new BehaviorSubject<any>([""]);
  constructor(private http: HttpClient) { }

  // categories$ = this.http.get<Category[]>("https://bookcart.azurewebsites.net/api/Book/GetCategoriesList").pipe(shareReplay(1));
  // books$ = this.getBooks().pipe(shareReplay(1));
  getTotalBooks(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((data:any)=>{
      return data
    }))
  }
  // filteredListOptions() {
  //   let item = this.postsData;
  //       let filteredPostsList = [];
  //       for (let post of posts) {
  //           for (let options of this.searchOption) {
  //               if (options.title === post.title) {
  //                 filteredPostsList.push(post);
  //               }
  //           }
  //       }
  //       console.log(filteredPostsList);
  //       return filteredPostsList;
  // }

}

