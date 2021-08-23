import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { PluginOptions } from './models/plugin-option';
import { LookupService } from './service/lookup.service';

@Component({
  selector: 'ng-mono360-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('placeHolder', { read: ViewContainerRef })
  viewContainers!: QueryList<ViewContainerRef>;
  title = 'shell';
  plugins: PluginOptions[] = [];
  widget: PluginOptions[] = [];
  index = 0;
  constructor(
    private lookupService: LookupService,
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}
  async ngOnInit(): Promise<void> {
    this.widget = this.lookupService.instantLookup();
  }

  async ngAfterViewInit(): Promise<void> {
    // this.plugins = await this.lookupService.lookup();
    // this.plugins = this.lookupService.instantLookup();

    // throw new Error('Method not implemented.');
    console.log(this.viewContainers);
    for (const vc of this.viewContainers) {
      vc.clear();

      const Component = await loadRemoteModule(this.widget[this.index]).then(
        (m) => m[this.widget[this.index].componentName]
      );

      // Ivy --> ViewEngine
      const factory = this.cfr.resolveComponentFactory(Component);

      const compRef = vc.createComponent(factory, undefined, this.injector);

      const compInstance = compRef.instance;
      console.log(compInstance);
      this.index++;
    }
  }
  add() {
    this.widget = [...this.widget, this.plugins[this.index]];
    this.index += 1;
    // this.widget = [...this.plugins];
  }

  trackByFn(index: number, comp: any) {
    return index + comp.displayName;
  }
}
