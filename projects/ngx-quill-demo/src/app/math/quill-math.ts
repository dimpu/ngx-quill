import { Quill, QuillNS } from 'projects/dimpu/ngx-quill/src/lib/quill';
const BlockEmbed = Quill.import('blots/block/embed');

enum MathFormat {
  Tex = 'Tex',
  AsciiMath = 'AsciiMath',
  MathML = 'MathML'
}

class QMath {
  formula: string;
  format: string;
  constructor(private _quill: QuillNS) {
    const toolbar = this._quill.getModule('toolbar');
    toolbar.addHandler('math', this.buildModelUI.bind(this));
  }

  buildModelUI() {
    const model = document.createElement('div');
    this.format = prompt('Enter Format');
    this.formula = prompt('Enter Formula');
    this.sentToServer();
  }

  sentToServer() {
    const url = 'http://localhost:3000/math';
    const fd = {
      format: this.format,
      formula: this.formula
    };

    const xhr = new XMLHttpRequest();
    xhr.onload = e => {
      if (xhr.status === 200 || xhr.status === 201) {
        this.serverOK(JSON.parse(xhr.response).data);
      } else {
        this.serverKO(xhr.response);
      }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(fd));
  }

  serverOK(responseData) {
    const range = this._quill.getSelection(true);
    this._quill.insertText(range.index, '\n', Quill.sources.USER);
    this._quill.insertEmbed(
      range.index + 1,
      'math',
      responseData,
      Quill.sources.USER
    );
  }

  serverKO(res) {
    console.log(res);
  }
}

class QMathBolt extends BlockEmbed {
  static create({ svg, format, formula }) {
    const node = super.create();
    node.dataset.format = format;
    node.dataset.formula = formula;
    node.innerHTML = svg;
    return node;
  }

  static value(domNode) {
    return domNode.dataset.id;
  }
}
(<any>QMathBolt).blotName = 'math';
(<any>QMathBolt).tagName = 'div';
(<any>QMathBolt).className = 'math';

export { QMathBolt, QMath };

/**
 * Custom module for quilljs to allow user to drag images from their file system into the editor
 * and paste images from clipboard (Works on Chrome, Firefox, Edge, not on Safari)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
//export class QMath {
//private quill: Quill;
//private options;

//constructor(quill: Quill, options: object = {}) {
//// save the quill reference
//this._quill = quill;
//// save options
////this.options = options;
//// listen for drop and paste events

//const toolbar = this._quill.getModule('toolbar');
//toolbar.addHandler('math', e => {
//console.log(e);
//e.preventDefault();
//}
////this.quill
////.getModule('toolbar')
////.addHandler('math', this.selectLocalImage.bind(this));
//}

/**
 * Select local image
 */
//selectLocalImage(): void {
//console.log('math');
////const input = document.createElement('input');
////input.setAttribute('type', 'file');
////input.click();

////// Listen upload local image and save to server
////input.onchange = () => {
////const file = input.files[0];

////// file type is only image.
////if (/^image\//.test(file.type)) {
////const checkBeforeSend =
////this.options.checkBeforeSend || this.checkBeforeSend.bind(this);
////checkBeforeSend(file, this.sendToServer.bind(this));
////} else {
////console.warn('You could only upload images.');
////}
////};
//}

/**
 * Check file before sending to the server
 * @param {File} file
 * @param {Function} next
 */
//checkBeforeSend(file: File, next: Function): void {
//next(file);
//}

/**
 * Send to server
 * @param {File} file
 */
//sendToServer(file: File): void {
//const url = this.options.url || 'your-url.com',
//method = this.options.method || 'POST',
//headers = this.options.headers || {},
//callbackOK =
//this.options.callbackOK || this.uploadImageCallbackOK.bind(this),
//callbackKO =
//this.options.callbackKO || this.uploadImageCallbackKO.bind(this),
//fd = new FormData();
//fd.append('file', file);
//fd.append('folder', 'images');

//const xhr = new XMLHttpRequest();
//// init http query
//xhr.open(method, url, true);
//// add custom headers
//for (const [key, val] of Object.entries(headers)) {
//xhr.setRequestHeader(key, <string>val);
//}

//// listen callback
//xhr.onload = () => {
//if (xhr.status === 201) {
//callbackOK(xhr.getResponseHeader('Location'), this.insert.bind(this));
//} else {
//callbackKO({
//code: xhr.status,
//response: xhr.response,
//responseLocation: xhr.getResponseHeader('Location'),
//type: xhr.statusText,
//body: xhr.responseText
//});
//}
//};

//xhr.send(fd);
//}

/**
 * Insert the image into the document at the current cursor position
 * @param {String} dataUrl  The base64-encoded image URI
 */
//insert(dataUrl: string): void {
//const index =
//(this.quill.getSelection() || {}).index || this.quill.getLength();
//this.quill.insertEmbed(index, 'image', dataUrl, 'user');
//}

/**
 *
 *
 * @param {*} response
 * @param {Function} next
 * @memberof ImageUpload
 */
//uploadImageCallbackOK(response: any, next: Function): void {
//next(response);
//}

/**
 *
 *
 * @param {Error} error
 * @memberof ImageUpload
 */
//uploadImageCallbackKO(error: Error): void {
//// tslint:disable-next-line:no-console
//console.log(error);
//}
//}

//function sendToServer(format, formula, callback) {
//console.log(format);
//console.log(formula);
//const url = 'http://localhost:3000/math';
//const fd = {
//format,
//formula
//};

//const xhr = new XMLHttpRequest();
//xhr.onload = e => {
//if (xhr.status === 200) {
//console.log(xhr);
//callback(JSON.parse(xhr.response));
//}
//};
//xhr.open('POST', url, true);
//xhr.send(fd);
//}
// /**
//  * Custom module for quilljs to allow user to drag images from their file system into the editor
//  * and paste images from clipboard (Works on Chrome, Firefox, Edge, not on Safari)
//  * @see https://quilljs.com/blog/building-a-custom-module/
//  */
// class QMath extends BlockEmbed {
//   private quill;
//   private options;
//   // constructor(quill: Quill, options: object = {}) {
//   //   console.log(quill);
//   // // save the quill reference
//   // this.quill = quill;
//   // // save options
//   // this.options = options;
//   // // listen for drop and paste events
//   // this.quill
//   //   .getModule('toolbar')
//   //   .addHandler('math', this.selectLocalImage.bind(this));
//   // console.log(this.quill.getModule('toolbar'));
//   // }

//   /**
//    * Select local image
//    */
//   selectLocalImage(): void {
//     alert('hi');
//     return;
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.click();

//     // Listen upload local image and save to server
//     input.onchange = () => {
//       const file = input.files[0];

//       // file type is only image.
//       if (/^image\//.test(file.type)) {
//         const checkBeforeSend =
//           this.options.checkBeforeSend || this.checkBeforeSend.bind(this);
//         checkBeforeSend(file, this.sendToServer.bind(this));
//       } else {
//         console.warn('You could only upload images.');
//       }
//     };
//   }

//   checkBeforeSend(file: File, next: Function): void {
//     next(file);
//   }

//   sendToServer(file: File): void {
//     console.log(file);
//     return;
//     const url = this.options.url || 'your-url.com',
//       method = this.options.method || 'POST',
//       headers = this.options.headers || {},
//       callbackOK =
//         this.options.callbackOK || this.uploadImageCallbackOK.bind(this),
//       callbackKO =
//         this.options.callbackKO || this.uploadImageCallbackKO.bind(this),
//       fd = new FormData();
//     fd.append('file', file);
//     fd.append('folder', 'images');

//     const xhr = new XMLHttpRequest();
//     // init http query
//     xhr.open(method, url, true);
//     // add custom headers
//     for (const [key, val] of Object.entries(headers)) {
//       xhr.setRequestHeader(key, <string>val);
//     }

//     // listen callback
//     xhr.onload = () => {
//       if (xhr.status === 201) {
//         callbackOK(xhr.getResponseHeader('Location'), this.insert.bind(this));
//       } else {
//         callbackKO({
//           code: xhr.status,
//           response: xhr.response,
//           responseLocation: xhr.getResponseHeader('Location'),
//           type: xhr.statusText,
//           body: xhr.responseText
//         });
//       }
//     };

//     xhr.send(fd);
//   }

//   insert(dataUrl: string): void {
//     const index =
//       (this.quill.getSelection() || {}).index || this.quill.getLength();
//     this.quill.insertEmbed(index, 'image', dataUrl, 'user');
//   }

//   uploadImageCallbackOK(response: any, next: Function): void {
//     next(response);
//   }

//   uploadImageCallbackKO(error: Error): void {
//     // tslint:disable-next-line:no-console
//     console.log(error);
//   }
// }
