import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from './models/book';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B17com';
//   category: string ="";
//   public books!: Book[];
//   public filteredProducts!: Book[];
//  constructor(private data : ApiService,private route: ActivatedRoute){

//  }

//   getBooks() {
//     this.data.books$.pipe(switchMap(
//       (data: Book[]) => {
//         this.filteredProducts = data;
//         return this.route.queryParams;
//       }
//     )).subscribe((params:any) => {
//       this.category = params.category;
     
//     });
//   }

//   filterBookData() {
//     const filteredData = this.filteredProducts.filter(b => b.price <= this.priceRange).slice();

//     if (this.category) {
//       this.books = filteredData.filter(b => b.category.toLowerCase() === this.category.toLowerCase());
//     } else if (this.searchItem) {
//       this.books = filteredData.filter(b => b.title.toLowerCase().indexOf(this.searchItem) !== -1
//         || b.author.toLowerCase().indexOf(this.searchItem) !== -1);
//     } else {
//       this.books = filteredData;
//     }
//     this.isLoading = false;
//   }

}
