import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs/Observable';

import { Item } from '../item';

@Component({
  selector: 'app-rxhttp',
  templateUrl: './rxhttp.component.html',
  styleUrls: ['./rxhttp.component.css']
})
export class RxhttpComponent implements OnInit {

  items: Item[];
  errorMessage: string;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
  this.itemService.getItems()
                   .subscribe(
                     heroes => this.items = heroes,
                     error =>  this.errorMessage = <any>error);
}

}
