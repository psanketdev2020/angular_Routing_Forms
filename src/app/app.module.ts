import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from './common/header/page-header/page-header.component';
import { BajajLandingComponent } from './bajaj-landing/bajaj-landing.component';
import { InvesterDetailsComponent } from './bajaj-landing/invester-details/invester-details.component';
import { RiskDetailsComponent } from './bajaj-landing/risk-details/risk-details.component';
import { SwpDetailsComponent } from './bajaj-landing/swp-details/swp-details.component';
import { CorpusDetailsComponent } from './bajaj-landing/corpus-details/corpus-details.component';
import { ModalComponent } from './modal/modal.component';
import { ThankyouPopupComponent } from './widget/thankyou-popup/thankyou-popup.component';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { FilterPipe } from './pipes/filter.pipe';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { galleyItems } from './appModal/galleryItems';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    BajajLandingComponent,
    InvesterDetailsComponent,
    RiskDetailsComponent,
    SwpDetailsComponent,
    CorpusDetailsComponent,
    ModalComponent,
    ThankyouPopupComponent,
    FilterPipe,
    MainComponent,
    GalleryComponent,
    GalleryItemComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    [ModalModule.forRoot()],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [galleyItems],
  bootstrap: [AppComponent],
})
export class AppModule {}
