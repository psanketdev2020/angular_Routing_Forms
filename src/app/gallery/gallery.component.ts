import { Component, OnInit } from '@angular/core';
import { galleyItems } from '../appModal/galleryItems';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryItem: [];
  constructor(private gallery: galleyItems) { }

  ngOnInit(): void {
   this.galleryItem = this.gallery.galleryData;
  }

}
