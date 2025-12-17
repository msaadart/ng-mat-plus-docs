import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, computed, inject, signal } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import {ThemeDarkLightComponent} from './theme-dark-light.component'

@Component({
  selector: 'app-theme-dark-light-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="themeComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          This component allows switching between <code class="     dark:bg-slate-800 px-1 py-0.5 rounded">dark</code> and
          <code class="     dark:bg-slate-800 px-1 py-0.5 rounded">light</code> themes using Angular signals. It updates
          the <code>&lt;html&gt;</code> root class and persists the preference in <code>localStorage</code>.
        </p>

        <div class="p-4 my-4  /70 dark:bg-slate-800/60 border-blue-500/60 dark:border-blue-400/60">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-700 dark:text-blue-300">Features</h3>
              <div class="mt-2 text-sm text-gray-700 dark:text-slate-300">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Reactive theme switching using Angular signals</li>
                  <li>Persists preference in <code>localStorage</code></li>
                  <li>Updates HTML <code>class="dark"</code> dynamically</li>
                  <li>Light and dark themes toggle button</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Basic Usage</h3>
            <p class="mt-2 text-gray-600">Render a theme toggle component with reactive dark/light switching.</p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicUsageExample"></app-code-viewer>
          </div>
        </div>

        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Toggle Theme</h3>
            <p class="mt-2 text-gray-600">Click the button to switch between light and dark modes.</p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="toggleExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">
        <div class="          p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5  " fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium  ">Notes</h3>
              <div class="mt-2 text-sm ">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Theme persists across page reloads using <code>localStorage</code></li>
                  <li>HTML root <code>class="dark"</code> is dynamically updated</li>
                  <li>Works with Tailwind or custom CSS dark mode classes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Component API</h2>
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Properties & Methods</h3>
            <p class="mt-2 text-gray-600">Public signals and methods available in the component.</p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="   ">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property/Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class=" divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">currentTheme</td>
                  <td class="px-6 py-4 text-sm text-gray-500">computed: TTheme</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Current theme value ('dark' or 'light')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">isDarkTheme</td>
                  <td class="px-6 py-4 text-sm text-gray-500">computed: boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">True if current theme is dark</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">toggleTheme()</td>
                  <td class="px-6 py-4 text-sm text-gray-500">method</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Switches between light and dark themes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class ThemeDarkLightDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  themeComponent = ThemeDarkLightComponent; // Optional: can be set to actual ThemeDarkLightComponent if needed
  publishedDate = '2025-12-16';
  title = 'Theme Dark/Light Component';

  htmlCode = `
    <div>
      <p>Current theme: {{ currentTheme() }}</p>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </div>
  `;

  tsCode = `
    import { Component, computed, inject, signal } from '@angular/core';
    type TTheme = 'dark' | 'light';

    @Component({...})
    export class ThemeDarkLightComponent {
      private _document = inject(DOCUMENT);
      private _currentTheme = signal<TTheme>(localStorage.getItem('preferred-theme') as TTheme || 'light');
      readonly isDarkTheme = computed(() => this._currentTheme() === 'dark');
      readonly currentTheme = computed(() => this._currentTheme());

      toggleTheme() {
        const theme: TTheme = this._currentTheme() === 'light' ? 'dark' : 'light';
        this._currentTheme.set(theme);
        this._document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('preferred-theme', theme);
      }
    }
  `;

  basicUsageExample = `
    <app-theme-dark-light></app-theme-dark-light>
  `;

  toggleExample = `
    <button (click)="toggleTheme()">Toggle Theme</button>
  `;
}
