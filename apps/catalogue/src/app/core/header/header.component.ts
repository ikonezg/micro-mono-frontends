import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-mono360-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter();
  constructor() {}

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
