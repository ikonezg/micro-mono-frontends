import { Component } from '@angular/core';

@Component({
  selector: 'ng-mono360-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'catalogue';
  show = false;

  onToggle() {
    this.show = !this.show;
  }
}
