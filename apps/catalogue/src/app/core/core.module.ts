import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [MenuComponent],
})
export class CoreModule {}
