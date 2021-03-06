import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

// Services
import { Db } from 'src/app/database/casaDoCodigo-db';
import { DbService } from 'src/app/database/casaDoCodigo-db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private setElementsBook: Db[] = []
  public getElementsBook: Db[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: DbService,
    private router: Router
    ) { }
    
  ngOnInit(): void {
    this.setElementsBook = this.bookService.retriveAll()
    this.getElementsBook = this.setElementsBook
    this.getBooks()
  }

  public getBooks() {
    const id = this.activatedRoute.snapshot.params['title'];
    const element = this.setElementsBook
    var elemento = []
    for (let i = 0; i < element.length; i++) {
      if (element[i].title == id) {
        elemento.push(element[i])
      }
      this.getElementsBook = elemento
    }
  }

  navigateButton(element: any) {
    this.router.navigate([`payment/${element}`])
  }
}