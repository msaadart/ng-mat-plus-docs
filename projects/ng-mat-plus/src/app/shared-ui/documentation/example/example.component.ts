import { Component, computed, input, Type, signal, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibTabComponent, TTabConfig } from 'ng-mat-plus/lib-tab';
import { LibThemeDarkLightService } from 'ng-mat-plus/services'
import { CodeViewerComponent } from '../code-viewer/code-viewer.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, LibTabComponent],
  template: `
    <div class="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl" 
         [ngClass]="{
           'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50': $themeService.isDarkTheme(), 
           'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 shadow-lg': !$themeService.isDarkTheme()
         }">
      
      <!-- Decorative Top Border -->
      <div class="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <!-- Header Section -->
      <header class="relative px-6 py-5 backdrop-blur-sm"
              [ngClass]="{
                'bg-slate-800/50 border-b border-slate-700/50': $themeService.isDarkTheme(),
                '/80 border-b border-gray-200': !$themeService.isDarkTheme()
              }">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- Icon Badge -->
            <div class="p-2 rounded-lg transition-all duration-300"
                 [ngClass]="{
                   'bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30': $themeService.isDarkTheme(),
                   'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200': !$themeService.isDarkTheme()
                 }">
              <svg class="w-5 h-5" [ngClass]="{'text-blue-400': $themeService.isDarkTheme(), 'text-blue-600': !$themeService.isDarkTheme()}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            
            <div>
              <h3 class="text-xl font-bold tracking-tight" 
                  [ngClass]="{
                    'text-slate-100': $themeService.isDarkTheme(),
                    'text-gray-600': !$themeService.isDarkTheme()
                  }">
                {{title()}}
              </h3>
              <p class="text-xs mt-0.5" 
                 [ngClass]="{
                   'text-slate-400': $themeService.isDarkTheme(),
                   'text-gray-500': !$themeService.isDarkTheme()
                 }">
                {{showCode() ? 'Live Preview' : 'Source Code'}}
              </p>
            </div>
          </div>
          
          <!-- Toggle Button -->
          <div class="flex items-center gap-2">
            <button
              (click)="toggleCode()"
              class="group/btn relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              [ngClass]="{
                'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25': $themeService.isDarkTheme(),
                'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30': !$themeService.isDarkTheme()
              }">
              <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                @if (showCode()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                }
              </svg>
              <span class="font-semibold">
                {{showCode() ? 'View Code' : 'View Preview'}}
              </span>
            </button>
          </div>
        </div>
      </header>
      
      <!-- Content Section -->
      <section class="relative px-6 py-6">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none"
             [ngClass]="{
               'bg-grid-pattern-dark': $themeService.isDarkTheme(),
               'bg-grid-pattern-light': !$themeService.isDarkTheme()
             }"></div>
        
        <div class="relative">
          @if (showCode()) {
            <!-- Preview Section -->
            <div class="view-section min-h-[300px] rounded-xl p-8 transition-all duration-500 animate-fadeIn"
                 [ngClass]="{
                   'bg-slate-800/30 border border-slate-700/30': $themeService.isDarkTheme(),
                   '  border border-gray-200': !$themeService.isDarkTheme()
                 }">
              @if (component()) {
                <ng-template *ngComponentOutlet="component() ?? null"></ng-template>
              }
            </div>
          } @else {
            <!-- Code Section -->
            <div class="code-section animate-fadeIn">
              <lib-tab [tabConfig]="tabsConfig()" [selectedIndex]="0" [stretchTabs]="true" class="w-full"></lib-tab>
            </div>
          }
        </div>
      </section>
      
      <!-- Footer Accent -->
      <div class="h-0.5 w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-50"></div>
    </div>
  `,
  styles: [`
    /* Fade In Animation */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }

    /* Grid Pattern */
    .bg-grid-pattern-dark {
      background-image: 
        linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .bg-grid-pattern-light {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    /* Smooth Transitions */
    * {
      transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Button Ripple Effect */
    button {
      position: relative;
      overflow: hidden;
    }

    button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    button:active::before {
      width: 300px;
      height: 300px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {
  component = input<Type<any>>();
  title = input<string>('');
  htmlCode = input<string>('');
  tsCode = input<string>('');
  cssCode = input<string>('');
  showCode = signal(true);
  protected $themeService = inject(LibThemeDarkLightService);

  ngOnInit(): void {}

  tabsConfig = computed<TTabConfig[]>(() => {
    const tabs: TTabConfig[] = [];
    if (this.htmlCode()) {
      tabs.push({
        label: "HTML",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.htmlCode, language: 'html' }
      });
    }
    if (this.cssCode()) {
      tabs.push({
        label: "CSS",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.cssCode, language: 'css' }
      });
    }
    if (this.tsCode()) {
      tabs.push({
        label: "TS",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.tsCode, language: 'typescript' }
      });
    }
    return tabs;
  });

  toggleCode() {
    this.showCode.update(v => !v);
  }
}