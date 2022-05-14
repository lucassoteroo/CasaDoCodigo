import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { RoutingModule } from './routing.module';
// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ListComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
