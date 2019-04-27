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

