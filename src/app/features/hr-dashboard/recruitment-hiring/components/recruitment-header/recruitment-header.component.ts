import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-recruitment-header',
  standalone: true,
  templateUrl: './recruitment-header.component.html'
})
export class RecruitmentHeaderComponent {

  @Output()
  tabChanged = new EventEmitter<string>();

  @Output()
  raiseRequisition = new EventEmitter<void>();

  activeTab = 'Job Requisitions';

  tabs = [
    'Job Requisitions',
    'Hiring Pipeline',
    'AI JD Copilot'
  ];

  changeTab(tab: string): void {

    this.activeTab = tab;

    this.tabChanged.emit(tab);

  }

  onRaiseRequisition(): void {

    this.raiseRequisition.emit();

  }

}