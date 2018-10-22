import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-quill-demo';
  content: any;

  modules = {
    formula: true,
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'],
      ['image', 'code-block']
    ],
    // imageResize: {},
  };

  constructor() {
    this.content = '<h1>Dimpu</h1>';
    setTimeout(() => {
      this.content = '<h1>Aravind</h1>';
    }, 1000);
  }

  onContentChanged($event) {
    console.log($event);
  }

  ngAfterViewInit(): void {

  }
}
