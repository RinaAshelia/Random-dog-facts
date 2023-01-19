import { Component } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { DogFact, DogFactService } from '../service/dogfacts.service';
import { DogImageService } from '../service/dogimages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dogImageUrl$!: Observable<string>;
  public dogFact$!: Observable<DogFact>

  constructor(private dogImagesService: DogImageService, private dogFactService: DogFactService) {
    this.nextFact();
  }

  nextFact(): void {
    this.dogImageUrl$ = this.dogImagesService.getImage()
    this.dogFact$ = this.dogFactService.getFact() 
  }

}
