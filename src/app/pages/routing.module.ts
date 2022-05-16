import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PaymentComponent } from './payment/payment.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':area',
        children: [
          {
            path: '',
            component: ListComponent,
          },
          {
            path: ':title',
            component: DetailsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'payment/:id',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }