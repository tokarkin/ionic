import { IonicModule, IonSelectOption, IonSelect } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PhoneMaskDirective } from './tab1.directive';
// import { TextMaskModule } from 'angular2-text-mask';
// import { NgxMaskModule, IConfig } from 'ngx-mask'

// export let options: Partial<IConfig> | (() => Partial<IConfig>);
// import { InputMaskModule } from 'ionic-input-mask';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [Tab1Page, PhoneMaskDirective],
  exports: [
    PhoneMaskDirective
  ],
})
export class Tab1PageModule {}
