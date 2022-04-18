import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CasaHeaderComponent } from './casa-header/casa-header.component';
import { CasaSearchComponent } from './casa-search/casa-search.component';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaFooterComponent } from './casa-footer/casa-footer.component';



@NgModule({
  declarations: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent,
  ],
  exports: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
