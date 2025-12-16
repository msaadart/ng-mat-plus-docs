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
      class="relative w-full rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl group"
      [ngClass]="{
        'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-slate-900/50': $themeService.isDarkTheme(),
        'bg-gradient-to-br from-white via-gray-50 to-white text-gray-600 shadow-xl': !$themeService.isDarkTheme()
      }"
    >
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <!-- Top Accent Border -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 animate-gradient"></div>

      <!-- Decorative Blobs -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>

      <!-- Header -->
      <header 
        class="relative p-8 border-b backdrop-blur-sm"
        [ngClass]="{
          'border-slate-700/50 bg-slate-800/30': $themeService.isDarkTheme(),
          'border-gray-200/50 /50': !$themeService.isDarkTheme()
        }"
      >
        <div class="flex flex-col gap-4">
          <!-- Title Section -->
          <div class="flex items-start gap-4">

            <!-- Title & Meta Section -->
<div class="flex-1 min-w-0 space-y-2">
  <!-- Title -->
  <h1
    class="text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
    [ngClass]="{
      'from-blue-400 via-purple-400 to-pink-400': $themeService.isDarkTheme()
    }"
  >
    {{ title() }} <span class="text-gray-400 dark:text-gray-500 font-normal">Documentation</span>
  </h1>

  <!-- Meta Info -->
  <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
    <!-- Published Date 
    <div
      class="flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-200"
      [ngClass]="{
        'border-slate-700 bg-slate-800/40 hover:bg-slate-800/60': $themeService.isDarkTheme(),
        'border-gray-200      hover:bg-gray-200': !$themeService.isDarkTheme()
      }"
    >
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span>Published:</span>
      <span
        class="font-medium"
        [ngClass]="{
          'text-slate-200': $themeService.isDarkTheme(),
          'text-gray-700': !$themeService.isDarkTheme()
        }"
      >
        {{ displayDate }}
      </span> 
    </div> -->

    <!-- Divider 
    <div class="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></div>-->

    <!-- Verified Badge -->
    <div
      class="flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-200"
      [ngClass]="{
        'border-blue-700/50 bg-blue-900/30 hover:bg-blue-900/50': $themeService.isDarkTheme(),
        'border-blue-200   hover:bg-blue-100': !$themeService.isDarkTheme()
      }"
    >
      <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="font-medium text-blue-600 dark:text-blue-400">Verified by ng-mat-plus</span>
    </div>

    <!-- Version Badge -->
    <div
      class="flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-200"
      [ngClass]="{
        'border-green-700/50 bg-green-900/30': $themeService.isDarkTheme(),
        'border-green-200 bg-green-50': !$themeService.isDarkTheme()
      }"
    >
      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span class="text-xs font-semibold text-green-600 dark:text-green-400">LATEST</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </header>

      <!-- Tabs Section -->
      <div class="relative p-8">
        <lib-tab
          [tabConfig]="tabsConfig()"
          [selectedIndex]="0"
          [stretchTabs]="true"
          class="w-full"
        ></lib-tab>
      </div>

      <!-- Bottom Accent -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent"></div>
    </section>
  `,
  styles: [
    `
      /* Grid Pattern Background */
      .bg-grid-pattern {
        background-image: 
          linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
        background-size: 30px 30px;
      }

      /* Gradient Animation */
      @keyframes gradient {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }

      /* Tab Styling */
      :host ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
        color: var(--mat-sys-on-surface);
        font-weight: 700;
        position: relative;
      }

      :host ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
        border-radius: 2px;
        animation: slideIn 0.3s ease-out;
      }

      @keyframes slideIn {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }

      :host ::ng-deep .mat-mdc-tab .mdc-tab__text-label {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--mat-sys-on-surface);
        font-weight: 500;
      }

      :host ::ng-deep .mat-mdc-tab:hover .mdc-tab__text-label {
        color: var(--mat-sys-primary) !important;
        transform: translateY(-2px);
      }

      :host ::ng-deep .tab-content {
        padding-top: 1.5rem !important;
        animation: fadeInUp 0.4s ease-out;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Smooth Transitions */
      * {
        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
      }

      /* Pulse Animation */
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      /* Ping Animation */
      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      .animate-ping {
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
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