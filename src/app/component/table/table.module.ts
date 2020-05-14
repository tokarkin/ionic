import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablePage } from './table.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TablePageRoutingModule } from './table-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component:  TablePage}]),
    TablePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
