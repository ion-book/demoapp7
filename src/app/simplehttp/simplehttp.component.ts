import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css']
})
export class SimplehttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest():void{

    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe(
      (res: Response) => {
        this.data = res.json();
        this.loading = false;
      }      
    );
  }

}
