import { Component, OnInit } from '@angular/core';
import { SupersetResponse } from '../superset-response';
import { SupersetService } from '../superset.service';

@Component({
  selector: 'ng-mono360-superset-widget-list',
  templateUrl: './superset-widget-list.component.html',
  styleUrls: ['./superset-widget-list.component.scss'],
})
export class SupersetWidgetListComponent implements OnInit {
  list: string[] = [];

  constructor(private _supersetService: SupersetService) {}

  ngOnInit(): void {
    this._supersetService
      .getWidgetList()
      .subscribe((data: SupersetResponse) => {
        this.list = data.ids.map(
          (id) =>
            `http://10.135.11.155:8088/superset/explore/?r=${id}&standalone=1&height=400`
        );
      });
  }
}
