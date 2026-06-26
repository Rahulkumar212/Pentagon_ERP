import { Component, EventEmitter,
  Input,
  Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SearchBarComponent } from '../searchbar/search-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule,SearchBarComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  searchText = '';
  showNotifications = false;

  notifications = [
    { id: 1, message: 'New task assigned' },
    { id: 2, message: 'Approval pending' },
    { id: 3, message: 'Meeting at 3 PM' }
  ];

  user: any;

    @Input() showMenu = false;

  @Output() menuClick =
    new EventEmitter<void>();

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {
    this.user = this.auth.getCurrentUser();
  }

 get role(): string {
  return localStorage.getItem('role') ?? '';
}

get name(): string {
  return localStorage.getItem('userName') ?? '';
}


  getInitials(name: string): string {
  if (!name) return '';

  const words = name.trim().split(' ');

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (
    words[0].charAt(0) +
    words[words.length - 1].charAt(0)
  ).toUpperCase();
}

 onSearch(
  value: string
): void {

  console.log(
    'Searching:',
    value
  );

}

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

 logout() {

  this.auth.logout().subscribe({
    next: () => {

      localStorage.clear();

      this.router.navigate(['/login']);

    }
  });

}
}