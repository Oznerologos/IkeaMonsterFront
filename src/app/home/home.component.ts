import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  mail = new FormControl()
  password = new FormControl()
  error = false

  ngOnInit(): void {
  }

  connect() {
    console.log(this.password.value)
    if (this.password.value == "jeSuisUnMotDePasse") {
      this.http.post("http://localhost:8080/api/connexion", {
        "email": this.mail.value
      }).subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/listProduct'])
        }else {
          this.error = true
        }
      })
    } else {
      this.error = true
    }
  }

}
