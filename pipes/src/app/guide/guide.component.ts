import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  car: any = {
    brand: 'Toyota',
    weight: 255.6233,
    price: 1523.25343,
    miles: 254,
    releaseDate: new Date(2021, 4, 23)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
