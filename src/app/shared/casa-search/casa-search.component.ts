import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'casa-search',
  templateUrl: './casa-search.component.html',
  styleUrls: ['./casa-search.component.scss']
})
export class CasaSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emmitSearch.emit(value)
  }
}
