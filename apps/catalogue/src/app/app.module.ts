import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutingModule } from './app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { CoreModule } from './core/core.module';
import { TestWidgetComponent } from './widgets/test-widget/test-widget.component';

@NgModule({
  declarations: [AppComponent, TestWidgetComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingRoutingModule,
    MatSidenavModule,
    CoreModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
