import { Component, OnInit } from '@angular/core';

// Service
import { DbSections } from 'src/app/database/casaDoCodigo-db-sections';
import { DbSectionsService } from 'src/app/database/casaDoCodigo-db-sections.service';



@Component({
  selector: 'casa-sections',
  templateUrl: './casa-sections.component.html',
  styleUrls: ['./casa-sections.component.scss']
})
export class CasaSectionsComponent implements OnInit {

  private setSections: DbSections[] = []
  public getSections: DbSections[] = []

  constructor(private DbSection: DbSectionsService) { }

  ngOnInit(): void {
    this.setSections = this.DbSection.retriveAll()
    this.getSections = this.setSections
  }
}
