import { Component } from '@angular/core';
import { CoursesserviceService } from '../coursesservice.service';
import { courseslist } from '../courseslist';
import { Input } from '@angular/core';
@Component({
  selector: 'app-coursecomponent',
  templateUrl: './coursecomponent.component.html',
  styleUrls: ['./coursecomponent.component.css']
})
export class CoursecomponentComponent {
  @Input() parentdata!:courseslist[]
}