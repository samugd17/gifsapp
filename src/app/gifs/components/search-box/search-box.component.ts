import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput> <!-- Hashtags in templates are used to reference some value to use it in other places inside the template -->
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) { } // The services are always injected in the constructor

  searchTag() {
    let newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
