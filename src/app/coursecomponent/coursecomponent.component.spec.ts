import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecomponentComponent } from './coursecomponent.component';

describe('CoursecomponentComponent', () => {
  let component: CoursecomponentComponent;
  let fixture: ComponentFixture<CoursecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
