import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { Db } from 'src/app/database/casaDoCodigo-db';
import { DbService } from 'src/app/database/casaDoCodigo-db.service';

@Component({
  selector: 'casa-path',
  templateUrl: './casa-path.component.html',
  styleUrls: ['./casa-path.component.scss']
})
export class CasaPathComponent implements OnInit {

  private getBooks: Db[] = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: DbService
  ) { }

  ngOnInit(): void {
    this.getBooks = this.bookService.retriveAll()
  }

  backHome() {
    this.router.navigate([''])
  }

  backList() {
    const idList = this.activatedRoute.snapshot.params['id']
    const allBooks = this.getBooks
    let elementPath: string = ''
    for (const item of allBooks) {
      if (item.id == idList) {
        elementPath = item.section
      }
    }
    console.log(elementPath)
    this.router.navigate([`list/${elementPath}`])
  }
  
  backDetails() {
    this.router.navigate([''])
  }
}
