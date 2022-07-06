import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {id: 1, courseName: 'Angular'},
    {id: 2, courseName: 'HTML'},
    {id: 3, courseName: 'CSS'},
    {id: 4, courseName: 'C'},
    {id: 5, courseName: 'Python'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
