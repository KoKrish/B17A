import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  public Productlist:any;
  searchKey:string="";
   constructor(private data : ApiService) { }
   ngOnInit(): void {
 
     this.getTotalBooks();
     this.data.search.subscribe((val:any)=>{
       this.searchKey=val;
       console.log("from ProductlistComponent"+ this.searchKey)
     })
 
     this.data.filter.subscribe((data:any)=>{
       this.Productlist=data;
     })
 
     this.data.price.subscribe((data:any)=>{
       this.Productlist=data;
     })
   }
 
   getTotalBooks(){
     this.data.getTotalBooks().subscribe((data=>{
       this.Productlist=data      
     }))
   }

}
