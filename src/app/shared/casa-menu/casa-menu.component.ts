import { Component, OnInit } from '@angular/core';

// Service
import { DbSectionsService } from '../../database/casaDoCodigo-db-sections.service';
import { DbSections } from '../../database/casaDoCodigo-db-sections'

@Component({
  selector: 'casa-menu',
  templateUrl: './casa-menu.component.html',
  styleUrls: ['./casa-menu.component.scss']
})
export class CasaMenuComponent implements OnInit {

  private setSection: DbSections[] = [] 
  public getSection: DbSections[] = []

  constructor(private getService: DbSectionsService) { }

  ngOnInit(): void {
    this.setSection = this.getService.retriveAll()
    this.getSection = this.setSection
  }

}
