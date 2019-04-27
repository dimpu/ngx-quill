import { Component, OnInit } from '@angular/core';
// import * as QuillNS from 'quill';
// import { Quill } from 'quill';
let Quill: any = (<any>window).Quill;
declare var require: any;

if (!Quill) {
  Quill = require('quill');
}

const BlockEmbed: any = Quill.import('blots/block/embed');
class OIBlot extends BlockEmbed {


}
OIBlot.blotName = 'OI';
OIBlot.tagName = 'order-interation';
Quill.register(OIBlot);

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {
  editorOptions = {
    modules: {
      formula: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['formula'],
        ['image', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
      ],
    }
  };
  constructor() { }

  ngOnInit() {
    console.log(Quill);

  }

  onReady(quill) {
    console.log(quill);
    const customButton = document.querySelector('#custom-button');
    customButton.addEventListener('click', function() {
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, 'Ω');
      }
    });
    const customButton2 = document.querySelector('#custom-button2');
    customButton2.addEventListener('click', function() {
      const range = quill.getSelection(true);
      if (range) {
        // quill.insertEmbed(range.index, '<order-interation></order-interation>');
        quill.insertText(range.index, '\n', Quill.sources.USER);
        const name = 'samc-name-1';
        quill.insertEmbed(range.index + 1, 'order-interation', name, Quill.sources.USER);
        quill.formatText(range.index + 1, 1, { height: '170', width: '400' });
        quill.setSelection(range.index + 2, Quill.sources.SILENT);

      }
    });
  }

}
