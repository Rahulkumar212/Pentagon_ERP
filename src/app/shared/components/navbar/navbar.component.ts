import { Component, EventEmitter,
  Input,
  Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    private router: Router,
    private auth: AuthService
  ) {
    this.user = this.auth.getCurrentUser();
  }

  get role(): string {
  return this.user?.role ?? '';
}

get name(): string {
  return this.user?.name ?? '';
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

  onSearch() {
    console.log('Searching:', this.searchText);
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}