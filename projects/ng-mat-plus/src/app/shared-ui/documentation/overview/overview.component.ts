import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6">
      <!-- Overview Section -->
      @if (overviewContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl
           dark:bg-slate-900 border-gray-200 dark:border-slate-700">
          
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-32 h-32 from-blue-400/10 to-purple-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <!-- Icon & Title -->
          <div class="relative flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-slate-700 backdrop-blur-sm">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-gray-800 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Overview
            </h3>
          </div>

          <!-- Content -->
          <div class="relative px-6 py-5 text-gray-700 dark:text-slate-300 leading-relaxed">
            <ng-template *ngTemplateOutlet="overviewContent() ?? null"></ng-template>
          </div>
        </div>
      }

      <!-- Use Cases Section -->
      @if (useCasesContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl
           dark:bg-slate-900 border-gray-200 dark:border-slate-700">
          <div class="absolute top-0 right-0 w-32 h-32 from-emerald-400/10 to-teal-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div class="relative flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-slate-700 backdrop-blur-sm">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-gray-800 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Use Cases
            </h3>
          </div>

          <div class="relative px-6 py-5 text-gray-700 dark:text-slate-300 leading-relaxed">
            <ng-template *ngTemplateOutlet="useCasesContent() ?? null"></ng-template>
          </div>
        </div>
      }

      <!-- Other Content Section -->
      @if (otherContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl
           dark:bg-slate-900 border-gray-200 dark:border-slate-700">
          <div class="relative px-6 py-5 text-gray-700 dark:text-slate-300 leading-relaxed">
            <ng-template *ngTemplateOutlet="otherContent() ?? null"></ng-template>
          </div>
        </div>
      }

      <!-- Notes Section -->
      @if (noteContent()) {
        <div class="group relative overflow-hidden rounded-xl border border-amber-300/50 dark:border-amber-700/50
          bg-amber-50 dark:bg-amber-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
          <div class="absolute top-0 left-0 w-20 h-20 from-amber-400/20 to-orange-400/20 rounded-br-full transform -translate-x-10 -translate-y-10"></div>
          <div class="relative px-6 py-4 flex items-start gap-4">
            <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500 dark:bg-amber-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div class="flex-1 text-sm">
              <span class="inline-flex items-center gap-1 font-bold text-amber-800 dark:text-amber-300 mb-1">Note:</span>
              <div class="text-gray-700 dark:text-slate-300 leading-relaxed mt-1">
                <ng-template *ngTemplateOutlet="noteContent() ?? null"></ng-template>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    * { transition: all 0.3s ease; }
    .leading-relaxed { line-height: 1.75; }
    @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    .bg-clip-text { background-size: 200% 200%; animation: gradient-shift 3s ease infinite; }
  `]
})
export class OverviewComponent {
  overviewContent = input<TemplateRef<any>>();
  useCasesContent = input<TemplateRef<any>>();
  noteContent = input<TemplateRef<any>>();
  otherContent = input<TemplateRef<any>>();
}
