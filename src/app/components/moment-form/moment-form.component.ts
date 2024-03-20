import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Moment } from '../../Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;

  momentForm!: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new UntypedFormGroup({
      id: new UntypedFormControl(''),
      title: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      image: new UntypedFormControl(''),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.momentForm.patchValue({
      image: file,
    });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.momentForm.value)
  }
}
