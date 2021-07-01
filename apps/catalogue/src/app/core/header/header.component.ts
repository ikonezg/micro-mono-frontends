import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-mono360-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
