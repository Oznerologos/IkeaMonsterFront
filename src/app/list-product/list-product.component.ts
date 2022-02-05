import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router) { }

  url = "http://localhost:8000/api/product"
  products :any  = []

  ngOnInit(): void {
    
      this.http.get(this.url).subscribe((data : any) =>{
        this.products = data.data
        console.log(this.products)
      })
    
  }

  deleteProduct(id : number)
  {
    this.http.delete("http://localhost:8000/api/product/"+ id).subscribe((data : any) =>{
      window.location.reload()
    })
  }

}
