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
        imageSectionUrl: 'assets/image/sections/secao-front-end.svg',
        section1: 'HTML e CSS',
        section2: 'Javascript',
        section3: 'Todos',
        section4: '',
        section5: ''
    },
    {
        area: 'mobile',
        imageSectionUrl: 'assets/image/sections/secao-mobile-branco.svg',
        section1: 'iOS',
        section2: 'Android',
        section3: 'Multiplataforma',
        section4: 'Todos',
        section5: '',
    },
    {
        area: 'infraestrutura',
        imageSectionUrl: 'assets/image/sections/secao-infraestrutura-branco.svg',
        section1: 'Web',
        section2: 'Dados',
        section3: 'Todos',
        section4: '',
        section5: '',
    },
    {
        area: 'business',
        imageSectionUrl: 'assets/image/sections/secao-business-branco.svg',
        section1: 'Startups',
        section2: 'Marketing Digital',
        section3: 'Gestão',
        section4: 'Agile',
        section5: 'Todos',
    },
    {
        area: 'programação',
        imageSectionUrl: 'assets/image/sections/secao-programacao-branco.svg',
        section1: 'Lógica',
        section2: 'Java',
        section3: 'Python',
        section4: 'Games',
        section5: 'Todos',
    }
]