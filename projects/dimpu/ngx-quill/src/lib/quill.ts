import { default as QuillNS } from 'quill/core';

//import Toolbar from 'quill/modules/toolbar';
//import Snow from 'quill/themes/snow';

//import Bold from 'quill/formats/bold';
//import Italic from 'quill/formats/italic';
//import Header from 'quill/formats/header';
//import BlockEmbed from 'quill/blots/block';

//Quill.register({
//'modules/toolbar': Toolbar,
//'blots/block/embed': BlockEmbed,
//'themes/snow': Snow,
//'formats/bold': Bold,
//'formats/italic': Italic,
//'formats/header': Header
//});

declare const require;

const Quill = require('quill');

export { Quill, QuillNS };
