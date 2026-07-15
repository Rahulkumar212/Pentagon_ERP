import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { HiringRequirement } from '../../../../../core/models/hiring-requirement.type';


@Component({
  selector: 'app-requisition-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './requisition-card.component.html'
})
export class RequisitionCardComponent {

  @Input({ required: true })
  job!:  HiringRequirement;

  @Output()
  viewCandidates =
    new EventEmitter<HiringRequirement>();


  openCandidates(): void {

    this.viewCandidates.emit(
      this.job
    );

  }

}