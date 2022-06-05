import { Component, OnInit } from '@angular/core';
import { GuideService } from '../share/guide.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [GuideService]
})
export class AddItemComponent implements OnInit {
  totalItems: string[] = [];
  service: any;

  constructor(_service: GuideService) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.totalItems = this.service.getItems();
    console.log("ngOnInit")
  }

  onAddItem(item: string) {
    this.service.setItem(item);
    this.totalItems.push(item);
  }
}
