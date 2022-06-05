
import { Component, OnInit, SimpleChanges } from '@angular/core';

import { GuideService } from './../share/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  totalItems: string[] = [];
  myService: any;

  constructor(_myService: GuideService) {
    this.myService = _myService;
  } 

  ngOnInit(): void {
    this.totalItems = this.myService.getItems();
    GuideService.newItem.subscribe(
      item => this.myService.storeItem(item)
    );
  }
}
