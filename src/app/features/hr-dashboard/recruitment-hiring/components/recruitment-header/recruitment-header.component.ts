import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-recruitment-header',
  standalone: true,
  templateUrl: './recruitment-header.component.html'
})
export class RecruitmentHeaderComponent {
   
  @Input()
  activeTab = 'Job Requisitions';

  @Output()
  tabChanged = new EventEmitter<string>();

  @Output()
  raiseRequisition = new EventEmitter<void>();


  tabs = [
    'Job Requisitions',
    'Hiring Pipeline',
    'AI JD Copilot'
  ];

  changeTab(tab: string): void {

    this.tabChanged.emit(tab);

  }

  onRaiseRequisition(): void {

    this.raiseRequisition.emit();

  }

}