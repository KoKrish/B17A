import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {
  public Productlist:any=[];
  public filterprice:any=[];
  public Rs:any;
  max: number | undefined;
  min: number | undefined;
  value: number | undefined;
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getTotalBooks();
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) ;
    }

    return value;
  }
  
  getTotalBooks(){
    this.data.getTotalBooks().subscribe((data=>{
      this.Productlist=data 
      this.filterprice=data     
    }))

    
  }

  filter() {
    this.Productlist= this.filterprice
    .filter((a:any)=>{
      if(a.price<=this.Rs){
        return a
      }
    })
    this.data.price.next(this.Productlist);
  }

}
