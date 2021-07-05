import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupersetContainerComponent } from './superset-container/superset-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SupersetWidgetListComponent } from './superset-widget-list/superset-widget-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SupersetService } from './superset.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'widgets', pathMatch: 'full' },
  { path: 'widgets', component: SupersetWidgetListComponent },
];

@NgModule({
  declarations: [SupersetContainerComponent, SupersetWidgetListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
  ],
  exports: [SupersetContainerComponent],
  providers: [SupersetService],
})
export class SupersetModule {}
