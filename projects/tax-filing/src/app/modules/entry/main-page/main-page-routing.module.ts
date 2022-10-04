import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 
import { NavigationComponent } from '../navigation/navigation.component';
import { MainPageComponent } from './main-page.component';
import { TaxFilingComponent } from '../tax-filing/tax-filing.component';
import { Step1FormComponent } from '../tax-filing/components/step1-form/step1-form.component';
import { Step2ReviewConfirmComponent } from '../tax-filing/components/step2-review-confirm/step2-review-confirm.component';

const routes: Routes = [
  {
    path: '33',
    component: NavigationComponent,
  },
  {
    path: 'entry',
    component: MainPageComponent,
    children: [
      {
        path: 'tax-filing',
        component: TaxFilingComponent,
        children: [
          {
            path: 'form',
            component: Step1FormComponent
          },
          {
            path: 'confirm',
            component: Step2ReviewConfirmComponent
          },

        ],
      },
    ],
  },
  {
    redirectTo: 'entry/tax-filing/form',
    path: '**',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
