import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';


// Components
import { CasaHeaderComponent } from './casa-header/casa-header.component';
import { CasaSearchComponent } from './casa-search/casa-search.component';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaFooterComponent } from './casa-footer/casa-footer.component';
import { CasaMenuComponent } from './casa-menu/casa-menu.component';
import { CasaReleasesComponent } from './casa-releases/casa-releases.component';
import { CasaSectionsComponent } from './casa-sections/casa-sections.component';
import { CasaTableComponent } from './casa-table/casa-table.component';



@NgModule({
  declarations: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent,
    CasaMenuComponent,
    CasaReleasesComponent,
    CasaSectionsComponent,
    CasaTableComponent
  ],
  exports: [
    CasaHeaderComponent,
    CasaSearchComponent,
    CasaListComponent,
    CasaFooterComponent,
    CasaMenuComponent,
    CasaReleasesComponent,
    CasaSectionsComponent,
    CasaTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class SharedModule { }
