import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
declare var MM: any;

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements AfterViewInit {
  apiConfig: any = {
    baseUrl: 'http://localhost:3100/api/',
    listUrl: 'list',
    uploadUrl: 'upload'
  };

  constructor() { }

  onFileUploaded(res) {
    console.log(res);
  }

  onFileSelected($event) {
    console.log($event);
  }

  ngAfterViewInit(): void { }

}
