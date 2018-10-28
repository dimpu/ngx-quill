import { Component, OnInit } from '@angular/core';

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
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, '<order-interation></order-interation>');
      }
    });
  }

}
