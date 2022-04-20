import { DbRelease } from "./casaDoCodigo-db-release";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class DbReleaseService {
    retriveAll(): DbRelease[] {
        return Novidades
    }
}

let Novidades: DbRelease[] = [
    {
        book1: 'assets/image/books/PostgreSQL.png',
        aboutBook1: 'PostgreSQL: Banco de dados para aplicações web modernas',
        book2: 'assets/image/books/MezzioePHP7.png',
        book3: 'assets/image/books/CeVisualStudio.png',
    }
]