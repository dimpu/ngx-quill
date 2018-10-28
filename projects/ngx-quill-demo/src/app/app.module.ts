import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxQuillModule } from '@dimpu/ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { ThemesComponent } from './themes/themes.component';
import { ImageHandlerComponent } from './image-handler/image-handler.component';
import { ImageUploaderComponent } from './modals/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    CustomToolbarComponent,
    ThemesComponent,
    ImageHandlerComponent,
    ImageUploaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,

    NgxQuillModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [ImageUploaderComponent]
})
export class AppModule { }
