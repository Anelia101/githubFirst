import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  getBooks(){
    this.http.get("http://localhost:8081/books")
      .subscribe((res) => {
      console.log(res);
    })
  }
}
