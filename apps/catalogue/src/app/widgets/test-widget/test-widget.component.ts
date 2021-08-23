import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-mono360-test-widget',
  templateUrl: './test-widget.component.html',
  styleUrls: ['./test-widget.component.css'],
})
export class TestWidgetComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.id = param.id;
    });
  }
}
