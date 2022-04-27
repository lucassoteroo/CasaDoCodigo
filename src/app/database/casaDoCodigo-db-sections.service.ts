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
        area: 'programacao',
        imageSectionUrl: 'assets/image/sections/icon-programacao.svg',
        section1: 'Lógica',
        section2: 'Java',
        section3: 'Python',
        section4: 'Todos',
    },
    {
        area: 'mobile',
        imageSectionUrl: 'assets/image/sections/icon-mobile.svg',
        section1: 'iOS',
        section2: 'Android',
        section3: 'Multiplataforma',
        section4: 'Todos',
    },
    {
        area: 'front-end',
        imageSectionUrl: 'assets/image/sections/icon-front-end.svg',
        section1: 'HTML e CSS',
        section2: 'Javascript',
        section3: 'Outros',
        section4: 'Todos',
    },
    {
        area: 'infraestrutura',
        imageSectionUrl: 'assets/image/sections/icon-infraestrutura.svg',
        section1: 'Web',
        section2: 'Dados',
        section3: 'Outros',
        section4: 'Todos',
    },
    {
        area: 'business',
        imageSectionUrl: 'assets/image/sections/icon-business.svg',
        section1: 'Startups',
        section2: 'Marketing Digital',
        section3: 'Agile',
        section4: 'Todos',
    },
]