import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  items: Observable<string[]>;

  constructor (private wikipediaService: WikiService) { }

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }

  ngOnInit() {
  }

}
