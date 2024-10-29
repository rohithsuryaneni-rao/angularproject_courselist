import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursecomponentComponent } from './coursecomponent/coursecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursecomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
