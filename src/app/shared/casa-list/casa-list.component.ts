import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// Service
import { DbService } from '../../database/casaDoCodigo-db.service'
import { Db } from '../../database/casaDoCodigo-db'
import { DbSectionsService } from '../../database/casaDoCodigo-db-sections.service';
import { DbSections } from '../../database/casaDoCodigo-db-sections'

@Component({
  selector: 'casa-list',
  templateUrl: './casa-list.component.html',
  styleUrls: ['./casa-list.component.scss']
})
export class CasaListComponent implements OnInit {
  
  private setBooks: Db[] = []
  public getBooks: Db[] = []
  private setSection: DbSections[] = [] 
  public getSection: DbSections[] = []

  constructor(private activatedRoute: ActivatedRoute, private bookService: DbService, private getService: DbSectionsService) { }

  ngOnInit(): void {
    this.setBooks = this.bookService.retriveAll()
    this.getBooks = this.setBooks
    this.setSection = this.getService.retriveAll()
    this.getSection = this.setSection
  }

  public getSearch(value: string) {
    const filter = this.setBooks.filter((res: any) => {
      return !res.title.indexOf(value.toLowerCase())
    })
    this.getBooks = filter;
  }
}
