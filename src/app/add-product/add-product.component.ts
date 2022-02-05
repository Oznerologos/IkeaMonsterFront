import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  name = new FormControl()
  color = new FormControl()
  price  = new FormControl()
  promotion  = new FormControl()
  category = new FormControl()
  img = new FormControl()


  ngOnInit(): void {
  }

  addProduct()
  {
    this.http.post("http://localhost:8000/api/product/", {
      "name" :  this.name.value,
      "color" : this.color.value,
      "category" : this.category.value,
      "price" : this.price.value,
      "promotion" : this.promotion.value,
      "img" : this.img.value
    }).subscribe((data:any) => {
      if (data.success) {
        this.router.navigate(['/listProduct'])
      }
    })
  }
}
