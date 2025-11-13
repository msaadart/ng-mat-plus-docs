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
  template: `
    <div class="space-y-6">
      @if (overviewContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-blue-200/50 dark:border-slate-700/50">
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <!-- Icon & Title -->
          <div class="relative flex items-center gap-3 px-6 py-4 border-b border-blue-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      @if (useCasesContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-emerald-200/50 dark:border-slate-700/50">
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <!-- Icon & Title -->
          <div class="relative flex items-center gap-3 px-6 py-4 border-b border-emerald-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Use Cases
            </h3>
          </div>
          
          <!-- Content -->
          <div class="relative px-6 py-5 text-gray-700 dark:text-slate-300 leading-relaxed">
            <ng-template *ngTemplateOutlet="useCasesContent() ?? null"></ng-template>
          </div>
        </div>
      }

      @if (otherContent()) {
        <div class="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-violet-200/50 dark:border-slate-700/50">
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <!-- Content with padding -->
          <div class="relative px-6 py-5 text-gray-700 dark:text-slate-300 leading-relaxed">
            <ng-template *ngTemplateOutlet="otherContent() ?? null"></ng-template>
          </div>
        </div>
      }

      @if (noteContent()) {
        <div class="group relative overflow-hidden rounded-xl border border-amber-300/50 dark:border-amber-700/50 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
          <!-- Warning Icon Corner -->
          <div class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-br-full transform -translate-x-10 -translate-y-10"></div>
          
          <div class="relative px-6 py-4 flex items-start gap-4">
            <!-- Icon -->
            <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <div class="flex-1 text-sm">
              <span class="inline-flex items-center gap-1 font-bold text-amber-800 dark:text-amber-300 mb-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Note:
              </span>
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
    /* Smooth transitions */
    * {
      transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }

    /* Custom scrollbar for content areas */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.4);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(148, 163, 184, 0.6);
    }

    /* Enhanced text rendering */
    .leading-relaxed {
      line-height: 1.75;
    }

    /* Gradient text animation */
    @keyframes gradient-shift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    .bg-clip-text {
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  overviewContent = input<TemplateRef<any>>();
  useCasesContent = input<TemplateRef<any>>();
  noteContent = input<TemplateRef<any>>();
  otherContent = input<TemplateRef<any>>();
}