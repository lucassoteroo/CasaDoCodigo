import { Component, OnInit } from '@angular/core';

// Service
import { DbRelease } from 'src/app/database/casaDoCodigo-db-release';
import { DbReleaseService } from 'src/app/database/casaDoCodigo-db-release.service';

@Component({
  selector: 'casa-releases',
  templateUrl: './casa-releases.component.html',
  styleUrls: ['./casa-releases.component.scss']
})
export class CasaReleasesComponent implements OnInit {

  private setRelease: DbRelease[] = []
  public getRelease: DbRelease[] = []

  constructor(private releaseService: DbReleaseService) { }

  ngOnInit(): void {
    this.setRelease = this.releaseService.retriveAll()
    this.getRelease = this.setRelease
  }

}
