import { Component, inject } from '@angular/core';
import { LibBreadcrumbService, LibThemeDarkLightService } from 'ng-mat-plus/services';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, NgClass],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  private $breadcrumbService = inject(LibBreadcrumbService);
  protected $themeService = inject(LibThemeDarkLightService);

   /** Reactive breadcrumb list signal */
  readonly breadcrumbs = this.$breadcrumbService.breadcrumbs;
  
}
