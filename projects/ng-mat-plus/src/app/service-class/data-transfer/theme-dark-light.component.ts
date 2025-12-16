import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

type TTheme = 'dark' | 'light';

@Component({
  selector: 'app-theme-dark-light',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class.dark]="isDarkTheme()" class="p-4 flex flex-col items-center gap-4 transition-colors duration-300">
      <p>Current theme: <strong>{{ currentTheme() }}</strong></p>
      <button (click)="toggleTheme()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
  private _document = inject(DOCUMENT);

  /** Signal holding current theme */
  private _currentTheme = signal<TTheme>(this.getThemeFromLocalStorage());

  /** Computed signal to check if dark theme is active */
  readonly isDarkTheme = computed(() => this._currentTheme() === 'dark');

  /** Current theme string for template */
  readonly currentTheme = computed(() => this._currentTheme());

  constructor() {
    this.applyTheme(this._currentTheme()); // Apply saved or default theme
  }

  /** Toggle between light and dark themes */
  toggleTheme(): void {
    const newTheme: TTheme = this._currentTheme() === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  /** Apply theme and persist in localStorage */
  private applyTheme(theme: TTheme): void {
    this._currentTheme.set(theme);
    this._document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('preferred-theme', theme);
  }

  /** Retrieve saved theme from localStorage */
  private getThemeFromLocalStorage(): TTheme {
    return (localStorage.getItem('preferred-theme') as TTheme) || 'light';
  }
}
