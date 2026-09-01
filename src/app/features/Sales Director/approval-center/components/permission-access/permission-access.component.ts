import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PermissionItem,
  SALES_DIRECTOR_PERMISSIONS
} from '../../utils/permission-access.util';

import { PermissionManagementComponent } from '../../forms/permission-management/permission-management.component';

@Component({
  selector: 'app-permission-access',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PermissionManagementComponent
  ],
  templateUrl: './permission-access.component.html'
})
export class PermissionAccessComponent {

  permissions: PermissionItem[] =
    SALES_DIRECTOR_PERMISSIONS;

  // =====================================================
  // PERMISSION MANAGEMENT MODAL
  // =====================================================

  showPermissionManagement = false;

  // =====================================================
  // COUNTS
  // =====================================================

  get allowedCount(): number {
    return this.permissions.filter(
      permission => permission.status === 'allowed'
    ).length;
  }

  get restrictedCount(): number {
    return this.permissions.filter(
      permission => permission.status === 'restricted'
    ).length;
  }

  // =====================================================
  // OPEN PERMISSION MANAGEMENT
  // =====================================================

  openPermissionManagement(): void {
    this.showPermissionManagement = true;
  }

  // =====================================================
  // CLOSE PERMISSION MANAGEMENT
  // =====================================================

  closePermissionManagement(): void {
    this.showPermissionManagement = false;
  }

  // =====================================================
  // PERMISSIONS CHANGED
  // =====================================================

  handlePermissionsChanged(
    permissions: any[]
  ): void {
    console.log('Permissions updated:', permissions);

    // Agar zarurat ho to yahan API call kar sakte ho.
  }

  // =====================================================
  // CHECK PERMISSION
  // =====================================================

  hasPermission(
    permission: PermissionItem,
    action: keyof Pick<
      PermissionItem,
      'view' |
      'create' |
      'edit' |
      'approve' |
      'delete'
    >
  ): boolean {
    return permission[action];
  }
}