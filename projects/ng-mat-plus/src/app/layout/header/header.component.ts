import { ChangeDetectionStrategy, Component, inject, signal, DOCUMENT, output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { LibScreenBreakpointService, LibThemeDarkLightService } from 'ng-mat-plus/services';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, BreadcrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected breadcrumbs = signal<Array<{label: string, url: string}>>([]);
  private readonly _document = inject(DOCUMENT);
  protected $themeService = inject(LibThemeDarkLightService);
  protected $screenSize = inject(LibScreenBreakpointService);
  toggleDrawer = output<void>();

  
  toggleFullscreen(): void {
    const elem = this._document.documentElement;
    if (!this._document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen(); // Safari
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen(); // IE/Edge
      }
    } else {
      // Exit fullscreen
      if (this._document.exitFullscreen) {
        this._document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen(); // Safari
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen(); // IE/Edge
      }
    }
  }

}