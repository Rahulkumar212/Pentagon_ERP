import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject
} from '@angular/core';

import { AuthService } from '../../core/services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {

  private auth = inject(AuthService);

  private templateRef =
    inject(TemplateRef<any>);

  private viewContainer =
    inject(ViewContainerRef);

  @Input()
  set appHasRole(
    roles: string[]
  ) {

    const userRole =
      this.auth.getRole();

    if (
      userRole &&
      roles.includes(userRole)
    ) {

      this.viewContainer.clear();

      this.viewContainer.createEmbeddedView(
        this.templateRef
      );

    } else {

      this.viewContainer.clear();

    }

  }

}