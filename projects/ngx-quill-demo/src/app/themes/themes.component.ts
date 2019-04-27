import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {
  editorOptions = {
    theme: 'bubble',
  };
  public form: FormGroup;
  public content: AbstractControl;
  public quill: any;


  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      'content': ['<p>Im inline editor example </p>', Validators.compose([Validators.required])],
    });
    this.content = this.form.controls['content'];
  }

  public submitAnnouncement(values: Object): void {
    if (this.form.valid) {
       console.log('Submit!', values);
    }
  }

}
