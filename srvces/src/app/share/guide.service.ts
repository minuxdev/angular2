import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  // collectedItems: string[] = ['item 1', 'item 2', 'item 3'];
  collectedItems: string[] = [];
  
  static newItem = new EventEmitter<string>();

  constructor() { console.log('guideService') }

  getItems() {
    return this.collectedItems;
  }

  setItem(item: string) {
    GuideService.newItem.emit(item);
    // this.collectedItems.push(item);
  }

  storeItem(item: string) {
    this.collectedItems.push(item);
    console.log(item)
  }
}
