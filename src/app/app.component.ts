import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = [{
    name: 'Home',
    path: ''
  }, {
    name: 'Calendar',
    path: 'calendar'
  }, {
    name: 'Instructors',
    path: 'instructors'
  }, {
    name: 'Resources',
    path: 'resources'
  }, {
    name: '...',
    path: 'test'
  }];
}
