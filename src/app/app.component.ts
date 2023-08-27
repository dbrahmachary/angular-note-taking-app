import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  NewNote: any = { title: '', content: '' };
  Notes: any[] = [];
  FormEnable: boolean = false;

  addNote() {
    this.FormEnable = true;
    this.NewNote = { title: '', content: '' };
  }

  NoteSubmit() {
    if (this.NewNote.title.trim() !== '') {
      this.Notes.push({ ...this.NewNote });
      this.NewNote = { title: '', content: '' };
      this.FormEnable = false;
    } else {
      alert('input should not be empty');
    }
  }
  delete(notes) {
    console.log('deleted');
    const index = this.Notes.indexOf(notes);
    if (index !== -1) {
      this.Notes.splice(index, 1);
      this.FormEnable = false;
    }
  }
}
