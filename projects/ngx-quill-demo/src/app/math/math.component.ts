import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Quill, QuillNS } from 'projects/dimpu/ngx-quill/src/lib/quill';
import {
  QMathBolt,
  QMath
} from 'projects/ngx-quill-demo/src/app/math/quill-math';
Quill.register(QMathBolt);
Quill.register('modules/math', QMath);

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MathComponent implements OnInit {
  private _quill: QuillNS;
  content = 'Some Html';
  constructor() {}
  editorOptions = {
    modules: {
      math: true,
      toolbar: [['blockquote', 'formula', 'math']]
    }
  };
  ngOnInit() {}

  onContentChange($event) {
    // console.log($event);
  }

  onReady(quill) {
    this._quill = quill;
    //this.customHandlers();
  }

  customHandlers() {
    const toolbar = this._quill.getModule('toolbar');
    toolbar.addHandler('math', e => {
      console.log(e);
      //e.preventDefault();
      // const format = prompt('Enter math format');
      // const formula = prompt('Enter math Formula');
      // console.log(format);
      //const format = 'Tex';
      //const formula = 'e=mc^2';
      //const range = this._quill.getSelection(true);
      //this._quill.insertText(range.index, '\n', Quill.sources.USER);
      //this._quill.insertEmbed(
      //range.index + 1,
      //'math',
      //{
      //format,
      //formula
      //},
      //Quill.sources.USER
      //);
      //this._quill.setSelection(range.index + 2, Quill.sources.SILENT);
    });
  }
}
