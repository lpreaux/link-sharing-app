import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main.layout';

@NgModule({
  declarations: [TopbarComponent, MainLayoutComponent],
  imports: [CommonModule, RouterLink, NgOptimizedImage, RouterLinkActive],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
