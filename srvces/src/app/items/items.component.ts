import { Component, OnInit } from '@angular/core';

import { GuideService } from '../share/guide.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  totalItems: string[] = [];
  items: any;

  constructor(private _items: GuideService) {
    this.items = _items
  }

  ngOnInit(): void {
    this.totalItems = this.items.getItems()
  }

  onAddItem(item: string) {
    this.items.setItem(item);
  }

}
