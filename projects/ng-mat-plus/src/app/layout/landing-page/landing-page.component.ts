import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Renderer2,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        CodeViewerComponent,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
  <!-- HERO -->
<header class="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-rose-500">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-60 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div class="absolute bottom-20 right-1/3 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Floating Particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
        <div class="particle particle-7"></div>
        <div class="particle particle-8"></div>
      </div>

      <div class="relative container mx-auto px-6 py-24 md:py-32 text-center">
        <div class="max-w-5xl mx-auto">
          
          <!-- Version Badge with Animation -->
          <div class="flex justify-center mb-6 animate-fade-in">
            <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>v0.0.2 Now Available</span>
              <mat-icon class="text-base animate-bounce-horizontal">arrow_forward</mat-icon>
            </div>
          </div>

          <!-- Main Title with Gradient Animation -->
          <h1 class="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            <span class="inline-block animate-bounce-in animation-delay-100">n</span>
            <span class="inline-block animate-bounce-in animation-delay-150">g</span>
            <span class="inline-block animate-bounce-in animation-delay-200">-</span>
            <span class="inline-block animate-bounce-in animation-delay-250">m</span>
            <span class="inline-block animate-bounce-in animation-delay-300">a</span>
            <span class="inline-block animate-bounce-in animation-delay-350">t</span>
            <span class="inline-block animate-bounce-in animation-delay-400">-</span>
            <span class="inline-block animate-bounce-in animation-delay-450">p</span>
            <span class="inline-block animate-bounce-in animation-delay-500">l</span>
            <span class="inline-block animate-bounce-in animation-delay-550">u</span>
            <span class="inline-block animate-bounce-in animation-delay-600">s</span>
          </h1>

          <!-- Feature Pills with Icons -->
          <div class="flex items-center justify-center gap-3 text-white/90 text-base md:text-lg mb-6 flex-wrap animate-fade-in-up animation-delay-200">
            <div class="inline-flex items-center gap-2 animate-slide-in-left animation-delay-300 hover:scale-110 transition-transform cursor-pointer">
              <mat-icon class="text-xl animate-spin-slow">verified</mat-icon>
              <span>Production Ready</span>
            </div>
            <span class="w-1 h-1 bg-white/60 rounded-full hidden sm:block animate-pulse"></span>
            <div class="inline-flex items-center gap-2 animate-slide-in-up animation-delay-400 hover:scale-110 transition-transform cursor-pointer">
              <mat-icon class="text-xl animate-pulse">bolt</mat-icon>
              <span>Blazing Fast</span>
            </div>
            <span class="w-1 h-1 bg-white/60 rounded-full hidden sm:block animate-pulse"></span>
            <div class="inline-flex items-center gap-2 animate-slide-in-right animation-delay-500 hover:scale-110 transition-transform cursor-pointer">
              <mat-icon class="text-xl animate-beat">favorite</mat-icon>
              <span>Developer Loved</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            A polished Angular Material component library — <span class="font-bold text-white animate-glow">accessible</span>, <span class="font-bold text-white animate-glow animation-delay-100">themable</span> and <span class="font-bold text-white animate-glow animation-delay-200">production-ready</span>.
          </p>

          <!-- CTA Buttons with Hover Effects -->
          <div class="flex justify-center gap-4 flex-wrap mb-12 animate-fade-in-up animation-delay-400">
            <a routerLink="/components"
               class="group inline-flex items-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-110 transition-all duration-300 animate-float">
              <mat-icon class="text-2xl group-hover:rotate-[360deg] transition-transform duration-500">view_comfy_alt</mat-icon>
              <span>View Components</span>
              <div class="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                <mat-icon class="text-xl">arrow_forward</mat-icon>
              </div>
            </a>

            <a href="#installation"
               class="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/60 hover:scale-110 transition-all duration-300 animate-float animation-delay-200">
              <mat-icon class="text-2xl group-hover:translate-y-[-4px] transition-transform duration-300">rocket_launch</mat-icon>
              <span>Get Started</span>
            </a>
          </div>

          <!-- Stats with Animated Cards -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            <div class="stat-card group">
              <mat-icon class="text-3xl text-white/80 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">widgets</mat-icon>
              <div class="text-3xl md:text-5xl font-bold text-white mb-1 counter" data-target="50">50+</div>
              <div class="text-white/80 text-xs md:text-sm font-medium">Components</div>
            </div>
            
            <div class="stat-card group animation-delay-100">
              <mat-icon class="text-3xl text-white/80 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">accessibility</mat-icon>
              <div class="text-3xl md:text-5xl font-bold text-white mb-1 counter" data-target="100">100%</div>
              <div class="text-white/80 text-xs md:text-sm font-medium">Accessible</div>
            </div>
            
            <div class="stat-card group animation-delay-200">
              <mat-icon class="text-3xl text-white/80 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">speed</mat-icon>
              <div class="text-3xl md:text-5xl font-bold text-white mb-1">A+</div>
              <div class="text-white/80 text-xs md:text-sm font-medium">Performance</div>
            </div>
            
            <!-- <div class="stat-card group animation-delay-300">
              <mat-icon class="text-3xl text-white/80 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">cloud_download</mat-icon>
              <div class="text-3xl md:text-5xl font-bold text-white mb-1 counter" data-target="10">10k+</div>
              <div class="text-white/80 text-xs md:text-sm font-medium">Downloads</div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Animated Wave Separator -->
      <div class="relative h-16 md:h-24">
        <svg class="absolute bottom-0 w-full h-full animate-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                fill="white" 
                fill-opacity="1">
          </path>
        </svg>
      </div>
    </header>

  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

    <!-- FEATURES -->
    <section class="mb-20">
      <div class="text-center mb-12 animate-on-scroll">
        <span class="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-bounce-subtle">Why Choose ng-mat-plus?</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Built for Modern Angular Development</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Everything you need to build beautiful, accessible, and performant applications</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="relative group animate-on-scroll">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <mat-icon class="text-white text-3xl">bolt</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Fast & Performant</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Optimized rendering and minimized bundle sizes ensure smooth, production-ready performance at scale.
            </p>
            <div class="flex items-center gap-2 text-sm text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Explore performance</span>
              <mat-icon class="text-base group-hover:translate-x-2 transition-transform">arrow_forward</mat-icon>
            </div>
          </div>
        </div>

        <div class="relative group animate-on-scroll animation-delay-100">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <mat-icon class="text-white text-3xl">palette</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Theming & Customizable</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Adapt colors, density, and typography seamlessly using design tokens and Material palettes.
            </p>
            <div class="flex items-center gap-2 text-sm text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View theming guide</span>
              <mat-icon class="text-base group-hover:translate-x-2 transition-transform">arrow_forward</mat-icon>
            </div>
          </div>
        </div>

        <div class="relative group animate-on-scroll animation-delay-200">
          <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <mat-icon class="text-white text-3xl">accessibility</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Accessible by Design</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Every component supports ARIA roles, keyboard navigation, and WCAG 2.2 compliance out of the box.
            </p>
            <div class="flex items-center gap-2 text-sm text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Learn about a11y</span>
              <mat-icon class="text-base group-hover:translate-x-2 transition-transform">arrow_forward</mat-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="mb-20 animate-on-scroll">
      <div class="relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl animate-gradient"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div class="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-12">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-10">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4 animate-bounce-subtle">
                <mat-icon class="text-indigo-600">info</mat-icon>
                <span class="text-sm font-semibold text-indigo-700">About the Library</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet ng-mat-plus</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                <code class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-semibold">ng-mat-plus</code> is a collection of opinionated Angular Material
                components designed to reduce UI friction in enterprise applications. Each component follows Material Design guidelines,
                supports standalone usage, and aims for predictable behavior across browsers and screen sizes.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 animate-pulse-slow">
                  <mat-icon class="text-white">widgets</mat-icon>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">50+ Components</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Buttons, inputs, date pickers, tables, dialogs, and more — all pre-styled and ready to use.
                </p>
              </div>

              <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 animation-delay-100">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 animate-pulse-slow animation-delay-500">
                  <mat-icon class="text-white">auto_awesome</mat-icon>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Common Patterns</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Proven patterns for forms, lists, dialogs, dashboards, and navigation that work out of the box.
                </p>
              </div>

              <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 animation-delay-200">
                <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4 animate-pulse-slow animation-delay-1000">
                  <mat-icon class="text-white">menu_book</mat-icon>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Complete Docs</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Comprehensive Storybook documentation and usage guides to help developers integrate quickly.
                </p>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a routerLink="/components" class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-shimmer">
                <mat-icon>explore</mat-icon>
                <span>Browse All Components</span>
              </a>
              <a routerLink="/docs" class="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-200">
                <mat-icon>description</mat-icon>
                <span>Read Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED COMPONENTS -->
    <section class="mb-16 animate-on-scroll">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured Components</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Discover our most popular and powerful components, carefully crafted for modern web applications</p>
      </div>

      <div class="relative max-w-7xl mx-auto">
        <div class="overflow-hidden pb-4 pt-4">
          <div class="transition-all duration-500 ease-in-out"
               [style.transform]="'translateX(' + (-currentIndex * 100) + '%)'">
            <div class="flex">
              <ng-container *ngFor="let page of pages; let pageIdx = index">
                <div class="w-full flex-shrink-0">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ng-container *ngFor="let c of page">
                      <article
                        class="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col h-full"
                      >
                        <div 
                          class="h-2 bg-gradient-to-r flex-shrink-0 animate-gradient-x"
                          [ngClass]="getCategoryGradient(c.category)"
                        ></div>

                        <div class="p-6 flex flex-col flex-grow">
                          <div class="flex items-start gap-3 mb-4">
                            <div
                              class="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                              [ngClass]="getCategoryColor(c.category, 'bg')"
                            >
                              <mat-icon
                                class="text-2xl"
                                [ngClass]="getCategoryColor(c.category, 'text')"
                              >{{ c.icon || 'extension' }}</mat-icon>
                            </div>

                            <div class="flex-1 min-w-0">
                              <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                {{ c.title }}
                              </h3>
                              <p class="text-xs text-gray-500 font-medium mt-1">{{ c.short }}</p>
                            </div>
                          </div>

                          <p class="text-sm text-gray-600 leading-relaxed mb-5 flex-grow line-clamp-3">
                            {{ c.description }}
                          </p>

                          <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                            <a
                              [routerLink]="c.link"
                              class="inline-flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all group/link"
                            >
                              <span>Docs</span>
                              <mat-icon class="text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</mat-icon>
                            </a>
                            <span 
                              class="text-xs font-medium px-2.5 py-1 rounded-full"
                              [ngClass]="getCategoryBadge(c.category)"
                            >
                              {{ c.category }}
                            </span>
                          </div>
                        </div>
                      </article>
                    </ng-container>
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-8">
          <button 
            mat-raised-button
            color="primary"
            (click)="prev()" 
            aria-label="Previous"
            class="inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            [disabled]="currentIndex === 0">
            <mat-icon>chevron_left</mat-icon>
            <span class="hidden sm:inline">Previous</span>
          </button>

          <div class="flex justify-center gap-2">
            <button
              *ngFor="let _ of paginationDots; let i = index"
              (click)="goToPage(i)"
              [attr.aria-label]="'Go to page ' + (i + 1)"
              class="transition-all duration-300"
              [class]="
                i === currentIndex
                  ? 'w-8 h-3 rounded-full bg-indigo-600'
                  : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400'
              "
            ></button>
          </div>

          <button 
            mat-raised-button
            color="primary"
            (click)="next()" 
            aria-label="Next"
            class="inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            [disabled]="currentIndex >= totalPages - 1">
            <span class="hidden sm:inline">Next</span>
            <mat-icon>chevron_right</mat-icon>
          </button>
        </div>
      </div>
    </section>

    <!-- INSTALLATION -->
    <section id="installation" class="mb-16 animate-on-scroll">
      <div class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 md:px-12 md:py-8 animate-gradient-x">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center animate-bounce-subtle">
              <mat-icon class="text-white">rocket_launch</mat-icon>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-white">Get Started in Minutes</h2>
          </div>
          <p class="text-indigo-100 text-sm md:text-base">Follow these simple steps to integrate ng-mat-plus into your Angular project</p>
        </div>

        <div class="p-8 md:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-6">
              <div class="group">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    1
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                      Install the Package
                      <mat-icon class="text-base text-gray-400">download</mat-icon>
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">Add ng-mat-plus to your project using npm or yarn</p>
                    <div class="bg-gray-900 rounded-xl p-4 font-mono text-sm text-green-400 shadow-inner relative group/code overflow-hidden">
                      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/code:opacity-100 transition-opacity"></div>
                      <div class="relative flex items-center justify-between">
                        <code>npm install ng-mat-plus</code>
                        <button 
                          class="text-gray-400 hover:text-white transition-colors p-1"
                          aria-label="Copy command"
                        >
                          <mat-icon class="text-base">content_copy</mat-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    2
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                      Import Components
                      <mat-icon class="text-base text-gray-400">code</mat-icon>
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">Import components directly in your Angular modules or standalone components</p>
                    <div >
                      <app-code-viewer [code]="exampleUsageCode"></app-code-viewer>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    3
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                      Add Material Icons
                      <mat-icon class="text-base text-gray-400">font_download</mat-icon>
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">Include Material Icons font in your index.html</p>
                    <div class="bg-gray-900 rounded-xl p-4 font-mono text-xs text-blue-300 shadow-inner overflow-x-auto">
                      <code class="whitespace-pre">&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;</code>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    3
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                      Add Styles
                      <mat-icon class="text-base text-gray-400">integration_instructions</mat-icon>
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">Include styles.scss in your angular.json</p>
                    <div class="bg-gray-900 rounded-xl p-4 font-mono text-xs text-blue-300 shadow-inner overflow-x-auto">
                      <code class="whitespace-pre">projects/ng-mat-plus/src/styles.scss</code>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group">
  <div class="flex items-start gap-4">
    <div
      class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform">
      4
    </div>
    <div class="flex-1">
      <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
        Add Peer Dependencies
        <mat-icon class="text-base text-gray-400">library_add_check</mat-icon>
      </h3>
      <p class="text-sm text-gray-600 mb-3">Add the following dependencies to your <code>package.json</code> under
        <code>peerDependencies</code>.</p>
      <div
        class="bg-gray-900 rounded-xl p-4 font-mono text-xs text-blue-300 shadow-inner overflow-x-auto">
        <code class="whitespace-pre">
"peerDependencies":
  "@angular/common": "^20.2.0",
  "@angular/core": "^20.2.0",
  "@angular/material": "^20.2.0"

        </code>
      </div>
    </div>
  </div>
</div>

              
            </div>

            <aside class="space-y-4">
              <div class="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-lg transition-shadow">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center animate-pulse-slow">
                    <mat-icon class="text-indigo-600 text-xl">lightbulb</mat-icon>
                  </div>
                  <h4 class="font-bold text-gray-900">Pro Tip</h4>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Use standalone imports for tree-shakable bundles and faster load times in production builds.
                </p>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center animate-pulse-slow animation-delay-500">
                    <mat-icon class="text-purple-600 text-xl">menu_book</mat-icon>
                  </div>
                  <h4 class="font-bold text-gray-900">Resources</h4>
                </div>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link">
                      <mat-icon class="text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</mat-icon>
                      <span class="group-hover/link:underline">Documentation</span>
                    </a>
                  </li>
                  <!-- <li>
                    <a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link">
                      <mat-icon class="text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</mat-icon>
                      <span class="group-hover/link:underline">Example Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link">
                      <mat-icon class="text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</mat-icon>
                      <span class="group-hover/link:underline">GitHub Repository</span>
                    </a>
                  </li> -->
                </ul>
              </div>

              <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg animate-shimmer">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm opacity-75">Current Version</span>
                  <mat-icon class="text-green-400 animate-pulse">verified</mat-icon>
                </div>
                <div class="text-3xl font-bold">v0.0.2</div>
                <div class="text-xs opacity-75 mt-1">Latest stable release</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer class="bg-gray-900 text-gray-300 py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="mb-4">
        <a routerLink="/components" class="text-white font-medium hover:underline transition-colors">All components</a> ·
        <a routerLink="/docs" class="text-white font-medium hover:underline ml-2 transition-colors">Docs</a>
      </div>
      <div class="text-sm">
        © 2025 ng-mat-plus — Built with Angular & Material Design
      </div>
    </div>
  </footer>
  `,
    styles: [`
    /* Grid Pattern */
    .bg-grid-pattern {
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    /* Floating Particles - Enhanced */
    .particle {
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0.3;
      animation: float 20s infinite ease-in-out;
    }

    .particle-1 {
      width: 4px;
      height: 4px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .particle-2 {
      width: 6px;
      height: 6px;
      top: 60%;
      left: 80%;
      animation-delay: 3s;
    }

    .particle-3 {
      width: 3px;
      height: 3px;
      top: 40%;
      left: 30%;
      animation-delay: 1.5s;
    }

    .particle-4 {
      width: 5px;
      height: 5px;
      top: 80%;
      left: 60%;
      animation-delay: 4s;
    }

    .particle-5 {
      width: 4px;
      height: 4px;
      top: 30%;
      left: 90%;
      animation-delay: 2s;
    }

    .particle-6 {
      width: 3px;
      height: 3px;
      top: 50%;
      left: 20%;
      animation-delay: 5s;
    }

    .particle-7 {
      width: 5px;
      height: 5px;
      top: 70%;
      left: 40%;
      animation-delay: 2.5s;
    }

    .particle-8 {
      width: 4px;
      height: 4px;
      top: 15%;
      left: 70%;
      animation-delay: 3.5s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      33% {
        transform: translateY(-30px) translateX(20px);
      }
      66% {
        transform: translateY(-15px) translateX(-15px);
      }
    }

    /* Fade In Animation */
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Fade In Up Animation */
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Bounce In Animation */
    @keyframes bounce-in {
      0% {
        opacity: 0;
        transform: scale(0) translateY(-50px);
      }
      50% {
        transform: scale(1.1) translateY(0);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    /* Slide Animations */
    @keyframes slide-in-left {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slide-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Wave Animation */
    @keyframes wave {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-25px);
      }
    }

    /* Float Animation */
    @keyframes float-animation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    /* Glow Animation */
    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
      }
    }

    /* Beat Animation */
    @keyframes beat {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    /* Bounce Horizontal */
    @keyframes bounce-horizontal {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(5px);
      }
    }

    /* Bounce Subtle */
    @keyframes bounce-subtle {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    /* Spin Slow */
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Pulse Slow */
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
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

    /* Gradient X Animation */
    @keyframes gradient-x {
      0%, 100% {
        background-size: 200% 200%;
        background-position: left center;
      }
      50% {
        background-size: 200% 200%;
        background-position: right center;
      }
    }

    /* Blob Animation */
    @keyframes blob {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }

    /* Shimmer Animation */
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    /* Animation Classes */
    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }

    .animate-bounce-in {
      animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }

    .animate-slide-in-left {
      animation: slide-in-left 0.6s ease-out forwards;
    }

    .animate-slide-in-right {
      animation: slide-in-right 0.6s ease-out forwards;
    }

    .animate-slide-in-up {
      animation: slide-in-up 0.6s ease-out forwards;
    }

    .animate-wave {
      animation: wave 8s ease-in-out infinite;
    }

    .animate-float {
      animation: float-animation 3s ease-in-out infinite;
    }

    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }

    .animate-beat {
      animation: beat 1s ease-in-out infinite;
    }

    .animate-bounce-horizontal {
      animation: bounce-horizontal 1s ease-in-out infinite;
    }

    .animate-bounce-subtle {
      animation: bounce-subtle 2s ease-in-out infinite;
    }

    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
    }

    .animate-gradient-x {
      animation: gradient-x 3s ease infinite;
    }

    .animate-blob {
      animation: blob 7s ease-in-out infinite;
    }

    .animate-shimmer {
      background: linear-gradient(90deg, 
        rgba(99, 102, 241, 1) 0%, 
        rgba(168, 85, 247, 1) 50%, 
        rgba(99, 102, 241, 1) 100%
      );
      background-size: 200% auto;
      animation: shimmer 3s linear infinite;
    }

    /* Scroll Animation */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Animation Delays */
    .animation-delay-100 { animation-delay: 0.1s; }
    .animation-delay-150 { animation-delay: 0.15s; }
    .animation-delay-200 { animation-delay: 0.2s; }
    .animation-delay-250 { animation-delay: 0.25s; }
    .animation-delay-300 { animation-delay: 0.3s; }
    .animation-delay-350 { animation-delay: 0.35s; }
    .animation-delay-400 { animation-delay: 0.4s; }
    .animation-delay-450 { animation-delay: 0.45s; }
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-550 { animation-delay: 0.55s; }
    .animation-delay-600 { animation-delay: 0.6s; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-2000 { animation-delay: 2s; }

    /* Stat Card */
    .stat-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
      padding: 1.5rem 1rem;
      text-align: center;
      transition: all 0.3s ease;
      animation: fade-in-up 0.8s ease-out forwards;
    }

    .stat-card:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    mat-card { border-radius: 1rem; }
  `],
})
export class LandingPageComponent implements AfterViewInit, OnInit {
    @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLDivElement>;

    categoryColors: Record<string, { bg: string; text: string }> = {
        Forms: { bg: 'from-indigo-50 to-indigo-100', text: 'text-indigo-600' },
        Actions: { bg: 'from-pink-50 to-pink-100', text: 'text-pink-600' },
        Feedback: { bg: 'from-green-50 to-green-100', text: 'text-green-600' },
        Navigation: { bg: 'from-amber-50 to-amber-100', text: 'text-amber-600' },
        Overlay: { bg: 'from-purple-50 to-purple-100', text: 'text-purple-600' },
        Layout: { bg: 'from-cyan-50 to-cyan-100', text: 'text-cyan-600' },
        Utility: { bg: 'from-teal-50 to-teal-100', text: 'text-teal-600' },
        Styling: { bg: 'from-rose-50 to-rose-100', text: 'text-rose-600' },
        Display: { bg: 'from-blue-50 to-blue-100', text: 'text-blue-600' },
        Structure: { bg: 'from-lime-50 to-lime-100', text: 'text-lime-600' },
        Core: { bg: 'from-gray-50 to-gray-100', text: 'text-gray-700' },
        Input: { bg: 'from-violet-50 to-violet-100', text: 'text-violet-600' },
    };

    featuredComponents = [
        {
            title: 'Form Fields',
            short: 'Smart input controls',
            description: 'Material form fields with validation, hints and reactive form support.',
            category: 'Forms',
            icon: 'text_fields',
            link: ['/components/form-fields/text-field'],
            
        },
        {
            title: 'Buttons',
            short: 'Action buttons',
            description: 'Raised, flat, stroked and FAB buttons with ripple and color variants.',
            category: 'Actions',
            icon: 'smart_button',
            link: ['/components/all-buttons'],
        },
        {
            title: 'Loader',
            short: 'Progress indicators',
            description: 'Circular and linear loaders for async operations and visual feedback.',
            category: 'Feedback',
            icon: 'autorenew',
            link: ['/components/loader'],
        },
        {
            title: 'Paginator',
            short: 'Page navigation',
            description: 'Handle large lists and tables efficiently with pagination controls.',
            category: 'Navigation',
            icon: 'last_page',
            link: ['/components/paginator'],
        },
        {
            title: 'Modals',
            short: 'Dialogs & overlays',
            description: 'Responsive modal dialogs with animations and flexible configurations.',
            category: 'Overlay',
            icon: 'open_in_new',
            link: ['/components/modals'],
        },
        {
            title: 'Tooltip',
            short: 'Informative hints',
            description: 'Compact hints that appear on hover, focus, or tap interactions.',
            category: 'Feedback',
            icon: 'info',
            link: ['/components/tooltip'],
        },
        {
            title: 'Expansion Panel',
            short: 'Collapsible sections',
            description: 'Expandable panels to show and hide related content efficiently.',
            category: 'Layout',
            icon: 'unfold_more',
            link: ['/components/expansion-panel'],
        },
        {
            title: 'Search',
            short: 'Instant lookup',
            description: 'Interactive search field with debounce, filters and quick results.',
            category: 'Utility',
            icon: 'search',
            link: ['/components/search'],
        },
        {
            title: 'Tabs',
            short: 'Organize content',
            description: 'Switch between content views using accessible tab navigation.',
            category: 'Navigation',
            icon: 'tab',
            link: ['/components/tab/first'],
        },
        {
            title: 'Theming & Variables',
            short: 'Dynamic color system',
            description: 'Customize palettes, dark mode, and typography using tokens and variables.',
            category: 'Styling',
            icon: 'palette',
            link: ['/theming/typography-color'],
        },
        {
            title: 'Card List',
            short: 'Structured display',
            description: 'Display data elegantly using card layouts and grids.',
            category: 'Display',
            icon: 'view_module',
            link: ['/components/card'],
        },
        // {
        //     title: 'Layouts',
        //     short: 'Flexible containers',
        //     description: 'Responsive grid and flex utilities for adaptive layouts.',
        //     category: 'Structure',
        //     icon: 'dashboard_customize',
        //     link: ['/components/grid-list'],
        // },
        {
            title: 'Service Classes',
            short: 'Reusable logic layers',
            description: 'Shared business logic and helpers for better modular design.',
            category: 'Core',
            icon: 'build_circle',
            link: ['/services'],
        },
        {
            title: 'Content Editor',
            short: 'Rich text editor',
            description: 'Interactive WYSIWYG editor with formatting, images, and markdown support.',
            category: 'Input',
            icon: 'edit_note',
            link: ['/components/content-editor'],
        },
        {
            title: 'Side Menu',
            short: 'Navigation drawer',
            description: 'Collapsible side menu for app-wide navigation with nested items.',
            category: 'Navigation',
            icon: 'menu_open',
            link: ['/components/sidepanel'],
        },
    ];

    getCategoryColor(cat: string, type: 'bg' | 'text'): string {
        const color = this.categoryColors[cat] || this.categoryColors['Core'];
        return color[type];
    }

    getCategoryGradient(cat: string): string {
        const gradients: Record<string, string> = {
            Forms: 'from-indigo-400 to-indigo-600',
            Actions: 'from-pink-400 to-pink-600',
            Feedback: 'from-green-400 to-green-600',
            Navigation: 'from-amber-400 to-amber-600',
            Overlay: 'from-purple-400 to-purple-600',
            Layout: 'from-cyan-400 to-cyan-600',
            Utility: 'from-teal-400 to-teal-600',
            Styling: 'from-rose-400 to-rose-600',
            Display: 'from-blue-400 to-blue-600',
            Structure: 'from-lime-400 to-lime-600',
            Core: 'from-gray-400 to-gray-600',
            Input: 'from-violet-400 to-violet-600',
        };
        return gradients[cat] || gradients['Core'];
    }

    getCategoryBadge(cat: string): string {
        const badges: Record<string, string> = {
            Forms: 'bg-indigo-100 text-indigo-700',
            Actions: 'bg-pink-100 text-pink-700',
            Feedback: 'bg-green-100 text-green-700',
            Navigation: 'bg-amber-100 text-amber-700',
            Overlay: 'bg-purple-100 text-purple-700',
            Layout: 'bg-cyan-100 text-cyan-700',
            Utility: 'bg-teal-100 text-teal-700',
            Styling: 'bg-rose-100 text-rose-700',
            Display: 'bg-blue-100 text-blue-700',
            Structure: 'bg-lime-100 text-lime-700',
            Core: 'bg-gray-100 text-gray-700',
            Input: 'bg-violet-100 text-violet-700',
        };
        return badges[cat] || badges['Core'];
    }

    currentIndex = 0;
    cardsPerPage = 8;
    
    get pages() {
        const pages = [];
        for (let i = 0; i < this.featuredComponents.length; i += this.cardsPerPage) {
            pages.push(this.featuredComponents.slice(i, i + this.cardsPerPage));
        }
        return pages;
    }
    
    get totalPages() {
        return this.pages.length;
    }
    
    get paginationDots() {
        return Array(this.totalPages);
    }

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        this.setupScrollAnimation();
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.goToPage(0), 50);
    }

    setupScrollAnimation(): void {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        setTimeout(() => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);
    }

    goToPage(pageIndex: number) {
        this.currentIndex = Math.max(0, Math.min(pageIndex, this.totalPages - 1));
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    next() {
        if (this.currentIndex < this.totalPages - 1) {
            this.currentIndex++;
        }
    }

    exampleUsageCode: string = `
    import { Component } from '@angular/core';
    import { LibMatButtonComponent } from 'ng-mat-plus/lib-buttons';
    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [LibMatButtonComponent],
      template: \`
        <lib-mat-button>Click Me</lib-mat-button>
      \`
    })
    export class AppComponent {}
  `;
}