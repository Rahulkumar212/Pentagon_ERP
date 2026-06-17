import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {

  searchText = '';

  @Output()
  search =
    new EventEmitter<string>();

  onSearch(): void {

    this.search.emit(
      this.searchText
    );

  }

}