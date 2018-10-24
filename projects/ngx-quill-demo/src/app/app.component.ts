import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare const require: any;
const Quill = require('quill');

import { ImageDrop } from 'quill-image-drop-module';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
Quill.register('modules/imageDrop', ImageDrop);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public form: FormGroup;
  public content: AbstractControl;
  public quill: any;

  editorOptions = {
    modules: {
      formula: true,
      imageDrop: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['formula'],
        ['image', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
      ],
    }
  };
  editorOptions2 = {
    theme: 'bubble',
    modules: {
      formula: true,
      imageDrop: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['formula'],
        ['image', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      ],
      // ImageResize: {}
    }
  };

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      'content': ['<p>Im inline editor exmaple </p>', Validators.compose([Validators.required])],
    });

    this.content = this.form.controls['content'];
  }

  onContentChanged($event) {
    console.log($event);
  }

  onReady($event) {
    this.quill = $event;
    const customButton = document.querySelector('#custom-button');
    customButton.addEventListener('click', function() {
      const range = this.quill.getSelection();
      if (range) {
        this.quill.insertText(range.index, 'Ω');
      }
    });
  }

  public submitAnnouncement(values: Object): void {
    if (this.form.valid) {
       console.log('Submit!', values);
    }
  }

  ngOnDestroy(): void {
    this.quill.disable();
  }
}
