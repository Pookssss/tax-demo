import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';

// 
import { MainPageComponent } from './main-page.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { TaxFilingComponent } from '../tax-filing/tax-filing.component';
import { Step1FormComponent } from '../tax-filing/components/step1-form/step1-form.component';
import { Step2ReviewConfirmComponent } from '../tax-filing/components/step2-review-confirm/step2-review-confirm.component';

// 
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent,
    NavigationComponent,
    TaxFilingComponent,
    NavigationComponent,
    Step1FormComponent,
    Step2ReviewConfirmComponent,

  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    // BrowserModule
    SharedModule,
  ]
})
export class MainPageModule { }
