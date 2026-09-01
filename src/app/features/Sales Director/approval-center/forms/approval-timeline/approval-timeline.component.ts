import {
  Component,
  Input,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  APPROVAL_TIMELINE,
  ApprovalTimelineItem,
} from '../../utils/approval-timeline.util';

@Component({
  selector: 'app-approval-timeline',
  standalone: true,

  imports: [
    CommonModule,
  ],

  templateUrl: './approval-timeline.component.html',
})
export class ApprovalTimelineComponent {

  @Input()
  timeline: ApprovalTimelineItem[] = APPROVAL_TIMELINE;


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(
    status: ApprovalTimelineItem['status']
  ): string {

    switch (status) {

      case 'completed':
        return 'bg-emerald-500 text-white';

      case 'current':
        return 'bg-indigo-600 text-white';

      case 'changes-requested':
        return 'bg-amber-500 text-white';

      case 'rejected':
        return 'bg-red-500 text-white';

      case 'pending':
      default:
        return 'bg-slate-200 text-slate-500';
    }
  }


  // =====================================================
  // TIMELINE LINE CLASS
  // =====================================================

  getLineClass(index: number): string {

    const currentItem = this.timeline[index];

    if (!currentItem) {
      return 'bg-slate-200';
    }

    if (
      currentItem.status === 'completed' ||
      currentItem.status === 'changes-requested'
    ) {
      return 'bg-emerald-300';
    }

    return 'bg-slate-200';
  }


  // =====================================================
  // LAST ITEM
  // =====================================================

  isLastItem(index: number): boolean {

    return index === this.timeline.length - 1;
  }
}