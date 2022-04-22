import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { DbService } from '../../database/casaDoCodigo-db.service'
import { Db } from '../../database/casaDoCodigo-db'
import { DbSections } from 'src/app/database/casaDoCodigo-db-sections';
import { DbSectionsService } from 'src/app/database/casaDoCodigo-db-sections.service';



@Component({
  selector: 'casa-sections',
  templateUrl: './casa-sections.component.html',
  styleUrls: ['./casa-sections.component.scss']
})
export class CasaSectionsComponent implements OnInit {

  private setBooks: Db[] = []
  public getBooks: Db[] = []
  private setSections: DbSections[] = []
  public getSections: DbSections[] = []

  constructor(private activatedRoute: ActivatedRoute, private bookService: DbService , private DbSection: DbSectionsService) { }

  ngOnInit(): void {
    this.setBooks = this.bookService.retriveAll()
    this.getBooks = this.setBooks
    this.setSections = this.DbSection.retriveAll()
    this.getSections = this.setSections
  }
}
