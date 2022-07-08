import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseName: string = '';
  inscription: Subscription = new Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.inscription = this.route.queryParams.subscribe(
      (param: any) => {
        this.courseName = param['course']
      }
    );
  }

  onNavigate() {
    this.router.navigate(['courses'])
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
