import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
declare var MM: any;

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent  {

  apiConfig: any = {
    baseUrl: 'http://localhost:3100/api/',
    listUrl: 'list',
    uploadUrl: 'upload'
  };

  constructor(
    private dialogRef: MatDialogRef<ImageUploaderComponent>
  ) {}

  onFileUploaded($event) {
    this.dialogRef.close($event);
    console.log($event);
  }

  onFileSelected($event) {
    this.dialogRef.close($event);
    console.log($event);
  }

}
