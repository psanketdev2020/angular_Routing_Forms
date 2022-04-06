import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { galleyItems } from 'src/app/appModal/galleryItems';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css'],
})
export class GalleryItemComponent implements OnInit {
  galleryItem: [];
  selectedItem;
  currentId: number;
  constructor(private gallery: galleyItems, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.galleryItem = this.gallery.galleryData;

  this.activeRoute.params.subscribe((params: Params) => {
    this.currentId = params['id'];
  });
  this.selectedItem = this.galleryItem[this.currentId - 1];
  }
}
