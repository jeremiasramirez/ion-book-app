import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreshowPageRoutingModule } from './exploreshow-routing.module';

import { ExploreshowPage } from './exploreshow.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExploreshowPageRoutingModule
  ],
  declarations: [ExploreshowPage]
})
export class ExploreshowPageModule {}
