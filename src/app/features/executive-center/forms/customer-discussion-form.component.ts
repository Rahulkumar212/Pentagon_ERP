import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LeadDiscussion } from '../models/executive-center.type';

@Component({
  selector: 'app-customer-discussion-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl:
    './customer-discussion-form.component.html'
})
export class CustomerDiscussionFormComponent {

  @Input() lead: any;

    @Output() close =
  new EventEmitter<void>();

@Output() save =
  new EventEmitter<LeadDiscussion>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
      panelType: [''],
      amount: [''],
      remarks: ['']
    });
  }

  submit() {

    this.save.emit({
      leadId: this.lead.id,
      ...this.form.value
    });
  }
}