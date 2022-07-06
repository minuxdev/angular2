import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseName: string = '';
  inscription: Subscription = new Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscription = this.route.params.subscribe(
      (param: any) => {
        this.courseName = param['course']
      }
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
