import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { Db } from 'src/app/database/casaDoCodigo-db'
import { DbService } from 'src/app/database/casaDoCodigo-db.service'
import { DbSections } from 'src/app/database/casaDoCodigo-db-sections'
import { DbSectionsService } from 'src/app/database/casaDoCodigo-db-sections.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private setBooks: Db[] = []
  public getBooks: Db[] = []
  private setSections: DbSections[] = []
  public getSections: DbSections[] = []

  constructor(
    private booksService: DbService,
    private sectionsService: DbSectionsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setBooks = this.booksService.retriveAll()
    this.getBooks = this.setBooks
    this.setSections = this.sectionsService.retriveAll()
    this.getSections = this.setSections
  }

}
