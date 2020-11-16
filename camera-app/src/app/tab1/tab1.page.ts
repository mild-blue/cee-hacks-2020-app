import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private _photoService: PhotoService) {
  }

  public addPhotoToGallery() {
    this._photoService.addNewToGallery();
  }
}
