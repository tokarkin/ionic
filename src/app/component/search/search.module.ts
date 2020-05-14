import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SearchPageRoutingModule } from './search-routing.module'
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component:  SearchPage}]),
    SearchPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [SearchPage, LoadingComponent]
})
export class SearchPageModule {}
