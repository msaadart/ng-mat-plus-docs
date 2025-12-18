import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LibThemeDarkLightService } from 'ng-mat-plus/services';


@Component({
  selector: 'app-theme-dark-light',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center p-4" [ngClass]="{
    'bg-slate-900 text-slate-100 border-slate-700': $themeService.isDarkTheme(),
    'bg-white text-gray-500 border-gray-100': !$themeService.isDarkTheme()
  }">

      <p class="mr-3">Current theme: <strong>{{ $themeService.isDarkTheme() ? 'dark' : 'light' }}</strong></p>
      <button (click)="$themeService.toggleTheme()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Toggle Theme
      </button>
   
    </div>
  `,
  styles: [`
    button {
      cursor: pointer;
      border: none;
    }
  `]
})
export class ThemeDarkLightComponent {
  protected $themeService = inject(LibThemeDarkLightService);

 
}
