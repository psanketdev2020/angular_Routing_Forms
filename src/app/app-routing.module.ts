import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BajajLandingComponent } from './bajaj-landing/bajaj-landing.component';
import { FormComponent } from './form/form.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery/gallery.component';
// import { BajajLandingComponent } from './bajaj-landing/bajaj-landing.component';
// import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bajaj',
    pathMatch: 'full',
  },
  {
    path: 'bajaj',
    component: BajajLandingComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'gallery/:id',
    component: GalleryItemComponent
  },
  {
    path: 'forms',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
