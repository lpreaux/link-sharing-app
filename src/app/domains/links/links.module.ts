import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [LinksComponent],
  imports: [CommonModule, LinksRoutingModule, CoreModule],
})
export class LinksModule {}
