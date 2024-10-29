import { Injectable } from '@angular/core';
import { courseslist } from './courseslist';
import { filter } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesserviceService {
  courses:courseslist[]=[
    new courseslist(1,"JAVA","full stack developer and data structures",0,true,"/assets/apple.jpg"),
    new courseslist(2,"PYTHON","for easy programming",100,false,"/assets/orange.jpg"),
    new courseslist(3,"C++","develop various games using c++",200,true,"/assets/banana.jpg"),
    new courseslist(4,"HTML","build and design your webpage",300,true,"/assets/apple.jpg"),
    new courseslist(5,"CSS","design your page ",400,true,"/assets/orange.jpg"),
    new courseslist(6,"JAVASCRIPT","build your page interactive ",0,false,"/assets/banana.jpg")
  ]

  constructor() {}
  getAllcourses()
  {
    return this.courses
  }
  getFreeCourses()
  {
    return this.courses.filter(c=>c.price===0)
  }
  getNotFreeCourses()
  {
    return this.courses.filter(c=>c.price>0)
  }
  getAvailableCourses()
  {
    return this.courses.filter(c=>c.isavailable===true)
  }
  getNotAvailableCourses()
  {
    return this.courses.filter(c=>c.isavailable===false)
  }
}
