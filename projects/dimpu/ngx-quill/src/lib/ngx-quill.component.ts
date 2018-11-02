import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var require: any;
let Quill: any;

@Component({
  selector: 'ngx-quill',
  template: `<ng-content select="[ngx-quill-toolbar]"></ng-content>`,
  styleUrls: [
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxQuillComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class NgxQuillComponent implements AfterViewInit, ControlValueAccessor, OnChanges {

  quillEditor: any;
  editorElem: HTMLElement;
  defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': new Array<any>() }, { 'background': new Array<any>() }],          // dropdown with defaults from theme
      [{ 'font': new Array<any>() }],
      [{ 'align': new Array<any>() }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @Input() options: any = {};
  @Input() content: any;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const toolbarElem = this.elementRef.nativeElement.querySelector(
      '[ngx-quill-toolbar]'
    );

    this.elementRef.nativeElement.insertAdjacentHTML(
      'beforeend',
      '<div ngx-quill-element></div>'
    );
    this.editorElem = this.elementRef.nativeElement.querySelector(
      '[ngx-quill-element]'
    );


    if (!Quill) {
      Quill = require('quill');
    }

    this.options  =  {...{
      modules: this.defaultModules,
      placeholder: 'Insert text here ...',
      readOnly: false,
      theme: 'snow',
      boundary: document.body
    }, ...this.options};

    if (toolbarElem) {
      this.options.modules['toolbar'] = toolbarElem;
    }

    this.quillEditor = new Quill(this.editorElem, this.options);
    this.quillEditor.blur();

    if (this.content) {
      this.quillEditor.pasteHTML(this.content);
    }

    this.ready.emit(this.quillEditor);

    this.quillEditor.on('selection-change', (range: any) => {
      if (!range) {
        this.onModelTouched();
        this.blur.emit(this.quillEditor);
      } else {
        this.focus.emit(this.quillEditor);
      }
    });

    this.quillEditor.on('text-change', (delta: any, oldDelta: any, source: any) => {
      let html = this.editorElem.children[0].innerHTML;
      const text = this.quillEditor.getText();

      if (html === '<p><br></p>') {
        html = null;
      }

      this.onModelChange(html);

      this.change.emit({
        editor: this.quillEditor,
        html: html,
        text: text
      });
    });
    this.quillEditor.enable(false);
    setTimeout(() => {
      this.quillEditor.enable(true);
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['readOnly'] && this.quillEditor) {
      this.quillEditor.enable(!changes['readOnly'].currentValue);
    }

    if (changes['content'] && this.quillEditor) {
      this.quillEditor.pasteHTML(this.content);
    }
  }

  writeValue(currentValue: any) {
    this.content = currentValue;

    if (this.quillEditor) {
      if (currentValue) {
        this.quillEditor.pasteHTML(currentValue);
        return;
      }
      this.quillEditor.setText('');
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
}
