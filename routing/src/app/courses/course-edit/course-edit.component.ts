import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @Input('courseEdit') course = 
        {id: 0, courseName: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
