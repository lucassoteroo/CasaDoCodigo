import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'


// Components
import { CasaHeaderComponent } from './casa-header/casa-header.component';
import { CasaSearchComponent } from './casa-search/casa-search.component';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaFooterComponent } from './casa-footer/casa-footer.component';
import { CasaMenuComponent } from './casa-menu/casa-menu.component';
import { CasaReleasesComponent } from './casa-releases/casa-releases.component';



@NgModule({
  declarations: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent,
    CasaMenuComponent,
    CasaReleasesComponent,
  ],
  exports: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent,
    CasaMenuComponent,
    CasaReleasesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class SharedModule { }
