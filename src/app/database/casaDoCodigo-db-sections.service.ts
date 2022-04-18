import { DbSections } from "./casaDoCodigo-db-sections";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class DbSectionsService {
    retriveAll(): DbSections[] {
        return Secoes
    }
}

let Secoes: DbSections[] = [
    {
        area: 'front-end',
        imageSectionUrl:'assets/image/sections/secao-front-end.svg'
    }
]