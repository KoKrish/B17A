import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})
export class FilterlistComponent implements OnInit {

  public Productlist:any=[];
 public filter1:any=[];
 selectedTab="";

 @Input()
  category: string="";

  categories$: Observable<Category[]> | any;
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getTotalBooks();
    // this.fetchCategories();
  }
  

  // fetchCategories() {
  //   debugger;
  //   this.categories$ = this.data.categories$
  //     .pipe(
  //       catchError(error => {
  //         console.log('Error ocurred while fetching category List : ', error);
  //         return EMPTY;
  //       }));
  // }

  getTotalBooks(){
    this.data.getTotalBooks().subscribe((data=>{
      this.Productlist=data 
      this.filter1=data     
    }))
  }
  filter(category:any) {
    debugger;
    this.selectedTab=category;
    this.Productlist= this.filter1
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a
      }
    })
    this.data.filter.next(this.Productlist);
  }
}
