import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LiveWidgetsComponent } from './widgets/live-widgets/live-widgets.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'superset-widgets',
    loadChildren: () =>
      import('./superset/superset.module').then((m) => m.SupersetModule),
  },
  {
    path: 'live-widgets',
    component: LiveWidgetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
