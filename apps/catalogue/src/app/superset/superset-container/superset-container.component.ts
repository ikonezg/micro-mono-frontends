import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ng-mono360-superset-container',
  templateUrl: './superset-container.component.html',
  styleUrls: ['./superset-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupersetContainerComponent implements OnInit, OnDestroy {
  @Input() url: string;

  @ViewChild('super', { static: false }) iframe: ElementRef;

  itemUrl: SafeResourceUrl;
  setTime = 0;

  private _isKilled$ = new Subject();

  constructor(private sanitizer: DomSanitizer) {}
  ngOnDestroy(): void {
    this._isKilled$.next();
    this._isKilled$.complete();
  }

  ngOnInit(): void {
    this.itemUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  timeChange(value: number) {
    this._isKilled$.next();

    if (value) {
      interval(value * 1000)
        .pipe(takeUntil(this._isKilled$))
        .subscribe((_) => this.onRefresh());
    }
  }

  onRefresh() {
    console.log('refresh');

    this.iframe.nativeElement.src += '';
  }
}
