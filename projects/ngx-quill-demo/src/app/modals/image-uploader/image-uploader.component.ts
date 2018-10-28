import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var MM: any;

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new MM({
      el: '#media-manager',
      api: {
          baseUrl: 'https://www.iutbayonne.univ-pau.fr/~klevron/mm/api/',
          listUrl: 'list?path=images',
          downloadUrl: 'download',  // optional
          uploadUrl: 'upload',      // optional
          deleteUrl: 'delete'       // optional
      }
    });

  }

}
