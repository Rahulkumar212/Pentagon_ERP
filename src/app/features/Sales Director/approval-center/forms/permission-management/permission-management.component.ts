
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  PERMISSION_ACTIONS,
  PERMISSION_MODULES,
  PermissionAction,
  PermissionModule,
} from '../../utils/permission-management.util';

@Component({
  selector: 'app-permission-management',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  ],

  templateUrl: './permission-management.component.html',
})
export class PermissionManagementComponent {

  // =====================================================
  // INPUTS / OUTPUTS
  // =====================================================

  @Input()
  modules: PermissionModule[] = PERMISSION_MODULES;

  @Output()
  permissionsChanged =
    new EventEmitter<PermissionModule[]>();


  // =====================================================
  // CONSTANTS
  // =====================================================

  readonly actions = PERMISSION_ACTIONS;


  // =====================================================
  // FILTER STATE
  // =====================================================

  searchTerm = '';

  showOnlyEnabled = false;


  // =====================================================
  // FILTERED MODULES
  // =====================================================

  get filteredModules(): PermissionModule[] {

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();

    return this.modules.filter((module) => {

      const matchesSearch =
        !search ||
        module.moduleName
          .toLowerCase()
          .includes(search) ||
        module.description
          .toLowerCase()
          .includes(search);

      const matchesEnabled =
        !this.showOnlyEnabled ||
        this.hasAnyPermission(module);

      return (
        matchesSearch &&
        matchesEnabled
      );
    });
  }


  // =====================================================
  // CHECK SINGLE PERMISSION
  // =====================================================

  hasPermission(
    module: PermissionModule,
    action: PermissionAction
  ): boolean {

    return module.permissions[action];
  }


  // =====================================================
  // TOGGLE SINGLE PERMISSION
  // =====================================================

  togglePermission(
    module: PermissionModule,
    action: PermissionAction
  ): void {

    module.permissions[action] =
      !module.permissions[action];

    this.emitChanges();
  }


  // =====================================================
  // TOGGLE ALL PERMISSIONS
  // =====================================================

  toggleAll(
    module: PermissionModule
  ): void {

    const allEnabled =
      this.hasAllPermissions(module);

    this.actions.forEach((action) => {

      module.permissions[action.key] =
        !allEnabled;

    });

    this.emitChanges();
  }


  // =====================================================
  // CHECK ALL PERMISSIONS
  // =====================================================

  hasAllPermissions(
    module: PermissionModule
  ): boolean {

    return this.actions.every(
      (action) =>
        module.permissions[action.key]
    );
  }


  // =====================================================
  // CHECK ANY PERMISSION
  // =====================================================

  hasAnyPermission(
    module: PermissionModule
  ): boolean {

    return this.actions.some(
      (action) =>
        module.permissions[action.key]
    );
  }


  // =====================================================
  // ENABLED PERMISSION COUNT
  // =====================================================

  getEnabledCount(
    module: PermissionModule
  ): number {

    return this.actions.filter(
      (action) =>
        module.permissions[action.key]
    ).length;
  }


  // =====================================================
  // RESET ALL PERMISSIONS
  // =====================================================

  resetPermissions(): void {

    this.modules.forEach((module) => {

      this.actions.forEach((action) => {

        module.permissions[action.key] = false;

      });

    });

    this.emitChanges();
  }


  // =====================================================
  // EMIT CHANGES
  // =====================================================

  private emitChanges(): void {

    this.permissionsChanged.emit(
      this.modules
    );
  }
}

