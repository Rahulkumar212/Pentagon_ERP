import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import {
    CommonModule,
    DatePipe
} from '@angular/common';

@Component({
    selector: 'app-analytics-header',
    standalone: true,
    imports: [
        CommonModule,
        DatePipe
    ],
    templateUrl: './analytics-header.component.html'
})
export class AnalyticsHeaderComponent {

    @Input()
    activeTab = 'Revenue Overview';

    @Output()
    tabChanged = new EventEmitter<string>();

    today = new Date();

    tabs = [

        'Revenue Overview',

        'Organization Summary',

        'Visit Summary',

        'Executive Performance',

        'Billing Summary',

        'Sales Funnel',

        'Recent Activities'

    ];


    changeTab(tab: string): void {

        this.activeTab = tab;

        this.tabChanged.emit(tab);

    }

}