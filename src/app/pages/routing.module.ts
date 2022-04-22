import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {HomeComponent} from './home/home.component'
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/list/:area',
    component: ListComponent
  },
  {
    path: 'home/list/:area/details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }