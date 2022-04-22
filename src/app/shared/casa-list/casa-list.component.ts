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
  private setSections: DbSections[] = []
  public getSections: DbSections[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: DbService,
    private sectionsService: DbSectionsService
  ) { }

  ngOnInit(): void {
    this.setBooks = this.bookService.retriveAll()
    this.getBooks = this.setBooks
    this.setSections = this.sectionsService.retriveAll()
    this.getSections = this.setSections
    this.showBookSections()
  }

  public getSearch(value: string) {
    const filter = this.setBooks.filter((res: any) => {
      return !res.title.indexOf(value.toLowerCase())
    })
    this.getBooks = filter;
  }

    public showBookSections() {
    const area = this.activatedRoute.snapshot.params['area']
    const element = this.setBooks
    var elemento = []
    for (let i = 0; i < element.length; i++) {
      if (element[i].section == area)
        elemento.push(element[i])
    }
    this.getBooks = elemento
    console.log(this.getBooks)
  }
}
