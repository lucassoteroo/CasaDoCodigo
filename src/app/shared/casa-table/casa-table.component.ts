import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Db } from 'src/app/database/casaDoCodigo-db';
import { DbService } from 'src/app/database/casaDoCodigo-db.service';

@Component({
  selector: 'casa-table',
  templateUrl: './casa-table.component.html',
  styleUrls: ['./casa-table.component.scss']
})
export class CasaTableComponent implements OnInit {

  displayedColumns = ['bigImageUrl', 'title', 'pricePrinted'] 
  payment: Db[] = []
  bookPayment: Db[] = []

  constructor(
    private bookService: DbService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.payment = this.bookService.retriveAll()
    this.bookPayment
    this.getBook()
  }

  public getBook() {
    const id = this.activatedRoute.snapshot.params['id']
    let element = []
    for (const item of this.payment) {
      if (item.id == id) {
        element.push(item)
      }
    }
    this.bookPayment = element
  }
}


