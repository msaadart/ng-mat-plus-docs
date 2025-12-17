import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import { BreadcrumbComponent } from './breadcrumb.component';
 
@Component({
  selector: 'app-breadcrumb-service-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="breadcrumbComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent">
    </app-documentation>
 
    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          <code class="     dark:bg-slate-800 px-1 py-0.5 rounded  dark:text-slate-200">LibBreadcrumbService</code>
          builds breadcrumbs from route data. It supports static labels (<code>data.breadcrumb</code>) and dynamic
          params (<code>:id</code>). Labels can be overridden at runtime.
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
                  <li>Reactive breadcrumbs using Angular Signals</li>
                  <li>Static <code>data.breadcrumb</code> support</li>
                  <li>Dynamic <code>:id</code> segment auto label (Item {{ '{' }}id{{ '}' }})</li>
                  <li>Custom label overrides via <code>setCustomLabel</code></li>
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
            <p class="mt-2 text-gray-600">
              Render a breadcrumb trail from router data.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicUsageExample"></app-code-viewer>
          </div>
        </div>
 
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Dynamic Label Override</h3>
            <p class="mt-2 text-gray-600">
              Set a custom label for <code>:id</code> (e.g., Item 123 → John Doe).
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="overrideLabelExample"></app-code-viewer>
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
                  <li>Route config me <code>data.breadcrumb</code> set karna consistent labels ke liye helpful hai</li>
                  <li>Multiple child routes me trail recursion se banta hai</li>
                  <li>Custom labels Map me store hote hain; memory-friendly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
 
    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Service API</h2>
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Methods</h3>
            <p class="mt-2 text-gray-600">Available public methods of the service.</p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="   ">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signature</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class=" divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">breadcrumbs</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">computed: Breadcrumb[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Current breadcrumb trail</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">setCustomLabel</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(id: string, label: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Override label for dynamic id</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">resetCustomLabel</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(id: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Remove custom override</td>
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

export class BreadcrumbDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;
 
  breadcrumbComponent = BreadcrumbComponent;
  publishedDate = '2025-12-16';
  title = 'Breadcrumb Service';
 
  htmlCode = `
    <nav class="p-4 border rounded-md ">
      <div class="flex items-center flex-wrap gap-2">
        @for (bc of breadcrumbService.breadcrumbs(); track bc.url) {
          <a class="text-blue-600 hover:underline" [routerLink]="bc.url">{{ bc.label }}</a>
          <span class="text-gray-500">›</span>
        }
      </div>
    </nav>
  `;
 
  tsCode = `
    import { Component, inject } from '@angular/core';
    import { RouterModule } from '@angular/router';
    import { LibBreadcrumbService } from 'ng-mat-plus/services';
 
    @Component({
      selector: 'app-breadcrumb-demo',
      standalone: true,
      imports: [RouterModule],
      template: \`
        <nav>
          @for (bc of breadcrumbService.breadcrumbs(); track bc.url) {
            <a [routerLink]="bc.url">{{ bc.label }}</a>
            <span>›</span>
          }
        </nav>
      \`
    })
    export class BreadcrumbDemoComponent {
      breadcrumbService = inject(LibBreadcrumbService);
    }
  `;
 
  basicUsageExample = `
    // app.routes.ts (example)
    {
      path: 'users',
      data: { breadcrumb: 'Users' },
      children: [
        { path: ':id', data: { breadcrumb: 'Details' } }
      ]
    }
 
    // Component template
    <nav>
      @for (bc of breadcrumbService.breadcrumbs(); track bc.url) {
        <a [routerLink]="bc.url">{{ bc.label }}</a>
        <span>›</span>
      }
    </nav>
  `;
 
  overrideLabelExample = `
    import { Component, inject } from '@angular/core';
    import { LibBreadcrumbService } from 'ng-mat-plus/services';
 
    @Component({
      standalone: true,
      template: \`
        <button (click)="override()">Override Label</button>
      \`
    })
    export class OverrideLabelComponent {
      private breadcrumb = inject(LibBreadcrumbService);
      override() {
        this.breadcrumb.setCustomLabel('123', 'John Doe');
      }
    }
  `;
}
