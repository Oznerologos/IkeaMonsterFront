import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id = 0;
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }


  name = new FormControl()
  color = new FormControl()
  price = new FormControl()
  promotion = new FormControl()
  category = new FormControl()
  img = new FormControl()


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.http.get("http://localhost:8000/api/product/" + this.id).subscribe((data: any) => {
      this.product = data.data
      console.log(this.product)
    })


  }

  updateProduct() {
    console.log(this.name.value)
    console.log(this.color.value)
    console.log(this.category.value)
    console.log(this.price.value)
    console.log(this.promotion.value)
    console.log(this.img.value)

    this.http.put("http://localhost:8000/api/product/" + this.id, {
      "name": this.name.value,
      "color": this.color.value,
      "category": this.category.value,
      "price": this.price.value,
      "promotion": this.promotion.value,
      "img": this.img.value
    }).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(['/listProduct'])
      }
    })
  }

  deleteProduct() {
    this.http.delete("http://localhost:8000/api/product/" + this.id).subscribe((data: any) => {
      this.router.navigate(["/listProduct"])
    })
  }

}
