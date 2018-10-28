import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageUploaderComponent } from '../modals/image-uploader/image-uploader.component';


@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.css']
})
export class ImageHandlerComponent implements OnInit {
  editor: any;
  editorOptionsImageOnly = {
    modules: {
      formula: true,
      toolbar: {
        container: [['image']],
        handlers: {
          image: () => {
            const dialogRef = this.dialog.open(ImageUploaderComponent);
            dialogRef.afterClosed().subscribe(res => {
              if (res) {
                const range = this.editor.getSelection();
                this.editor.insertEmbed(range.index, 'image', res.thumb);
              }
            });
          }
        }
      }
    }
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onReady(quill) {
    this.editor = quill;
    console.log(quill);
  }

}



      // /**
      //  * Step1. select local image
      //  *
      //  */
      // function selectLocalImage() {
      //   const input = document.createElement('input');
      //   input.setAttribute('type', 'file');
      //   input.click();

      //   // Listen upload local image and save to server
      //   input.onchange = () => {
      //     const file = input.files[0];

      //     // file type is only image.
      //     if (/^image\//.test(file.type)) {
      //       saveToServer(file);
      //     } else {
      //       console.warn('You could only upload images.');
      //     }
      //   };
      // }

      // /**
      //  * Step2. save to server
      //  *
      //  * @param {File} file
      //  */
      // function saveToServer(file: File) {
      //   const fd = new FormData();
      //   fd.append('image', file);

      //   const xhr = new XMLHttpRequest();
      //   xhr.open('POST', 'http://localhost:3000/upload/image', true);
      //   xhr.onload = () => {
      //     if (xhr.status === 200) {
      //       // this is callback data: url
      //       const url = JSON.parse(xhr.responseText).data;
      //       insertToEditor(url);
      //     }
      //   };
      //   xhr.send(fd);
      // }

      // /**
      //  * Step3. insert image url to rich editor.
      //  *
      //  * @param {string} url
      //  */
      // function insertToEditor(url: string) {
      //   // push image url to rich editor.
      //   const range = editor.getSelection();
      //   editor.insertEmbed(range.index, 'image', `http://localhost:9000${url}`);
      // }
