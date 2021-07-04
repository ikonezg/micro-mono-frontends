import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-mono360-superset-widget-list',
  templateUrl: './superset-widget-list.component.html',
  styleUrls: ['./superset-widget-list.component.scss'],
})
export class SupersetWidgetListComponent implements OnInit {
  list = [
    'http://10.135.11.155:8088/superset/explore/?r=19&standalone=1&height=400',
    'http://10.135.11.155:8088/superset/explore/?r=20&standalone=1&height=400',
    'http://10.135.11.155:8088/superset/explore/?r=21&standalone=1&height=400',
  ];
  constructor() {}

  ngOnInit(): void {}
}
