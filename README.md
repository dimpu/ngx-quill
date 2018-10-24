# ngx-quill [![Build Status](https://travis-ci.org/dimpu/ngx-quill.svg?branch=develop)](https://travis-ci.org/dimpu/ngx-quill)
Angular (>=2) component for rich text editor Quill

# Example
[Demo Page](https://dimpu.github.io/ngx-quill/)


### Installation

``` bash
npm install @dimpu/ngx-quill --save
```

### Sample

Include NgxQuillModule in your main module:
``` typescript
import { NgxQuillModule } from '@dimpu/ngx-quill';

@NgModule({
  // ...
  imports: [
    NgxQuillModule
  ],
  // ...
})
export class AppModule {}
```

Then use it in your component:

``` html
<!-- use with ngModel -->
<ngx-quill [(ngModel)]="editorContent"
              [options]="editorOptions"
              (blur)="onEditorBlured($event)"
              (focus)="onEditorFocused($event)"
              (ready)="onEditorCreated($event)"
              (change)="onContentChanged($event)"></ngx-quill>


<!-- or use with formControl -->
<ngx-quill [formControl]="editorContent"
            [options]="editorOptions"
            (blur)="onEditorBlured($event)"
            (focus)="onEditorFocused($event)"
            (ready)="onEditorCreated($event)"
            (change)="onContentChanged($event)"></ngx-quill>
```

``` javascript
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: require('./sample.html')
})
export class Sample {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  constructor() {}

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }

  onReady(quill) {
    const customButton = document.querySelector('#custom-button');
    customButton.addEventListener('click', function() {
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, 'Ω');
      }
    });
  }

  

}
```


### Configuration
- options : The configuration object for quill see https://quilljs.com/docs/quickstart/

