import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ng-mono360-superset-container',
  templateUrl: './superset-container.component.html',
  styleUrls: ['./superset-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupersetContainerComponent implements OnInit, AfterViewInit {
  @Input() url: string;

  @ViewChild('super', { static: false }) iframe: ElementRef;

  itemUrl: SafeResourceUrl;
  setTime = 0;
  constructor(private sanitizer: DomSanitizer) {}
  ngAfterViewInit(): void {
    console.log(this.iframe.nativeElement.src);
  }

  ngOnInit(): void {
    this.itemUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onRefresh(time: number) {
    this.setTime = time;
    this.iframe.nativeElement.src += '';
  }
}
