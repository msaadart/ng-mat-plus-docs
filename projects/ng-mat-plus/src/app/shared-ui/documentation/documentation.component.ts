import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  TemplateRef,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibTabComponent, TTabConfig } from 'ng-mat-plus/lib-tab';
import { LibThemeDarkLightService } from 'ng-mat-plus/services';
import { getRelativeDateLabel } from 'ng-mat-plus/utilis';
import { OverviewComponent } from './overview/overview.component';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LibTabComponent],
  template: `
    <section
      class="relative w-full rounded-2xl overflow-hidden transition-all duration-300"
      [ngClass]="{
        'bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-lg': $themeService.isDarkTheme(),
        'bg-white text-gray-900 shadow-md border border-gray-200': !$themeService.isDarkTheme()
      }"
    >
      <!-- Top Accent Border -->
      <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

      <!-- Header -->
      <header 
        class="relative px-6 py-5 border-b"
        [ngClass]="{
          'border-slate-700/50': $themeService.isDarkTheme(),
          'border-gray-200': !$themeService.isDarkTheme()
        }"
      >
        <div class="flex flex-col gap-3">
          <!-- Title Section -->
          <div class="flex items-start gap-3">
            <!-- Title & Meta Section -->
            <div class="flex-1 min-w-0 space-y-2">
              <!-- Title -->
              <h1
                class="text-2xl font-semibold tracking-tight"
                [ngClass]="{
                  'text-white': $themeService.isDarkTheme(),
                  'text-gray-900': !$themeService.isDarkTheme()
                }"
              >
                {{ title() }} <span class="text-gray-500 font-normal text-lg">Documentation</span>
              </h1>

              <!-- Meta Info -->
              <div class="flex flex-wrap items-center gap-2 text-sm">
                <!-- Published Date -->
                <div
                  class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors duration-200"
                  [ngClass]="{
                    'bg-slate-800/60 text-slate-300': $themeService.isDarkTheme(),
                    'bg-gray-100 text-gray-600': !$themeService.isDarkTheme()
                  }"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ displayDate }}</span>
                </div>

                <!-- Verified Badge -->
                <div
                  class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors duration-200"
                  [ngClass]="{
                    'bg-blue-900/40 text-blue-400': $themeService.isDarkTheme(),
                    'bg-blue-50 text-blue-600': !$themeService.isDarkTheme()
                  }"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-xs font-medium">Verified</span>
                </div>

                <!-- Version Badge -->
                <div
                  class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors duration-200"
                  [ngClass]="{
                    'bg-green-900/40 text-green-400': $themeService.isDarkTheme(),
                    'bg-green-50 text-green-600': !$themeService.isDarkTheme()
                  }"
                >
                  <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span class="text-xs font-medium">LATEST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Tabs Section -->
      <div class="relative px-6 py-4">
        <lib-tab
          [tabConfig]="tabsConfig()"
          [selectedIndex]="0"
          [stretchTabs]="true"
          class="w-full"
        ></lib-tab>
      </div>
    </section>
  `,
  styles: [
    `
      /* Tab Styling */
      :host ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
        color: var(--mat-sys-on-surface);
        font-weight: 600;
        position: relative;
      }

      :host ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(to right, #a855f7, #ec4899);
        border-radius: 2px;
      }

      :host ::ng-deep .mat-mdc-tab .mdc-tab__text-label {
        transition: all 0.2s ease;
        color: var(--mat-sys-on-surface);
        font-weight: 500;
      }

      :host ::ng-deep .mat-mdc-tab:hover .mdc-tab__text-label {
        color: var(--mat-sys-primary) !important;
      }

      :host ::ng-deep .tab-content {
        padding-top: 1rem !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationComponent implements OnInit {
  component = input.required<Type<any>>();
  displayDate = '';
  publishedDate = input.required<string>();
  htmlCode = input<string>();
  tsCode = input<string>();
  cssCode = input<string>();
  title = input.required<string>();
  overviewContent = input<TemplateRef<any>>();
  useCasesContent = input<TemplateRef<any>>();
  noteContent = input<TemplateRef<any>>();
  otherContent = input<TemplateRef<any>>();
  protected $themeService = inject(LibThemeDarkLightService);

  tabsConfig = computed<TTabConfig[]>(() => [
    {
      label: 'Overview',
      type: 'component',
      component: OverviewComponent,
      inputs: {
        overviewContent: this.overviewContent,
        useCasesContent: this.useCasesContent,
        noteContent: this.noteContent,
        otherContent: this.otherContent,
      },
    },
    {
      label: 'Example',
      type: 'component',
      component: ExampleComponent,
      inputs: {
        title: this.title,
        tsCode: this.tsCode,
        htmlCode: this.htmlCode,
        component: this.component,
      },
    },
  ]);

  ngOnInit(): void {
    const inputDate = new Date(this.publishedDate());
    this.displayDate = getRelativeDateLabel({
      startDate: inputDate,
      isAgo: true,
      checkToday: true,
    });
  }
}