import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tax',
    loadChildren: () => import('./modules/entry/main-page/main-page.module').then(m => m.MainPageModule),
    data: { preload: false }
  },
  {
    path: '**',
    redirectTo: 'tax',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
