import { Component } from '@angular/core';
import { courseslist } from './courseslist';
import { CoursesserviceService } from './coursesservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseslist';
  constructor(private service:CoursesserviceService){}
  parentdata: courseslist[] = []
  getAllCourses()
  {
    this.parentdata=this.service.getAllcourses()
  }
  getFreeCourses()
  {
    this.parentdata=this.service.getFreeCourses()
  }
  getPaidCourses()
  {
    this.parentdata=this.service.getNotFreeCourses()
  }
  getAvailableCourses()
  {
    this.parentdata=this.service.getAvailableCourses()
  }
  getNotAvailableCourses()
  {
    this.parentdata=this.service.getNotAvailableCourses()
  }
}
