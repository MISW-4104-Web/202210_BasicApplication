import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { dataCourses } from './dataCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  constructor(private courseService: CourseService) { }

  getCourseList(): Array<Course> {
    return dataCourses;
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnInit() {
    this.getCourses();
  }

}
