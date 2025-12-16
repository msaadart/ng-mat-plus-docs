import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TextFieldInputComponent } from './text-field-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-text-Input-field-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="textFieldComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-8">
        <!-- Hero Description -->
        <div class="relative">
          <div class="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          <div class="pl-6">
            <p class="text-lg text-gray-800 leading-relaxed mb-4">
              The <code class="inline-flex items-center gap-1  px-3 py-1.5 rounded-lg text-indigo-700 font-mono text-sm font-bold shadow-sm ring-1 ring-indigo-200">&lt;lib-text-field&gt;</code> component is a versatile form input component that provides a styled text input field with various customization options.
            </p>
            <p class="text-base text-gray-600 leading-relaxed">
              It integrates seamlessly with Angular's Reactive Forms and Template-driven Forms, providing a consistent and accessible user experience.
            </p>
          </div>
        </div>
        
        <!-- Form Integration Info - Modern Card Layout -->
        <div class=" rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <!-- Header -->
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 /20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Form Integration</h3>
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <p class="text-gray-700 mb-6 leading-relaxed">
              This component is designed to work perfectly with Angular's form controls and provides seamless integration with your existing forms.
            </p>
            
            <!-- Features Grid -->
            <div class="grid grid-cols-1 gap-3">
              <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 font-medium">Supports both Reactive Forms and Template-driven Forms</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8  0 rounded-lg flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 font-medium">Automatically shows validation errors with clear messaging</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 font-medium">Maintains consistent styling with other form controls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-2xl font-bold text-gray-600 mb-6 flex items-center gap-3">
            <span class="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
            Key Features
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">Customizable Design</h4>
                <p class="text-sm text-gray-600">Label and placeholder text customization</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">State Management</h4>
                <p class="text-sm text-gray-600">Disabled state support with visual feedback</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">Form Validation</h4>
                <p class="text-sm text-gray-600">FormControl integration with error handling</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">Responsive Layout</h4>
                <p class="text-sm text-gray-600">Adapts to all screen sizes seamlessly</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">Accessibility</h4>
                <p class="text-sm text-gray-600">ARIA attributes and keyboard navigation</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 rounded-xl  border border-gray-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 hover:-translate-y-1">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-600 mb-1">Error Visualization</h4>
                <p class="text-sm text-gray-600">Clear error state indicators and messages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-8">    
        <div class="group relative overflow-hidden  rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-indigo-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div class="p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-600 mb-2">Basic Form Input</h3>
                <p class="text-gray-600 leading-relaxed">
                  Standard text input field with label and placeholder in a form context.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="group relative overflow-hidden  rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-purple-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
          <div class="p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-600 mb-2">FormGroup Integration</h3>
                <p class="text-gray-600 leading-relaxed">
                  Using the text field within a FormGroup with multiple controls.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="group relative overflow-hidden  rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-blue-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
          <div class="p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-600 mb-2">Validation Examples</h3>
                <p class="text-gray-600 leading-relaxed">
                  Implementing custom validation with error messages.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
            <app-code-viewer [code]="validationExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-6">    
        <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <div class="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div class="relative flex gap-6">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <svg class="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-amber-900 mb-4">Important Notes</h3>
              <div class="space-y-4">
                <p class="text-amber-800 leading-relaxed">
                  When using this component:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <span class="text-white font-bold text-xs">1</span>
                    </span>
                    <span class="text-amber-800">Always provide a FormControl for proper form integration</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <span class="text-white font-bold text-xs">2</span>
                    </span>
                    <span class="text-amber-800">For disabled fields, set both the disabled property and disable the FormControl</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <span class="text-white font-bold text-xs">3</span>
                    </span>
                    <span class="text-amber-800">Labels are required for accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
          <div class="relative flex gap-6">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <svg class="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-purple-900 mb-4">Customization Tips</h3>
              <div class="space-y-4">
                <p class="text-purple-800 leading-relaxed">
                  You can customize the text field through:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span class="text-purple-800">Wrapper components for additional functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-8">
        <div class="flex items-center gap-4 mb-8">
          <span class="w-2 h-12 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
          <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Advanced Usage</h2>
        </div>
        
        <div class="group relative overflow-hidden  rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-indigo-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
          <div class="p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-600 mb-2">Dynamic Fields</h3>
                <p class="text-gray-600 leading-relaxed">
                  Creating text fields dynamically based on data.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
            <app-code-viewer [code]="dynamicExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="group relative overflow-hidden  rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
          <div class="p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-600 mb-2">Input Properties</h3>
                <p class="text-gray-600 leading-relaxed">
                  Complete list of available input properties.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
            <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gradient-to-r from-gray-100 to-gray-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Property</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Type</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody class=" divide-y divide-gray-200">
                  <tr class="hover:bg-indigo-50/50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-indigo-100 text-indigo-800">label</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-mono      text-gray-700">string</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">The label text for the input field</td>
                  </tr>
                  <tr class="hover:bg-purple-50/50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-purple-100 text-purple-800">placeholder</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-mono      text-gray-700">string</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">Placeholder text displayed when the input is empty</td>
                  </tr>
                  <tr class="hover: /50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-blue-100 text-blue-800">control</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-mono      text-gray-700">FormControl</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">The FormControl instance for this input</td>
                  </tr>
                  <tr class="hover:bg-pink-50/50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-pink-100 text-pink-800">disabled</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-mono      text-gray-700">boolean</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">Whether the input is disabled (default: false)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: `
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
  `
})
export class TextFieldInputDocComponent  {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  textFieldComponent = TextFieldInputComponent;
  publishedDate = '2025-11-08';
  title = 'Text Field Component';

  htmlCode = `
    <lib-text-field
      [label]="'Username'"
      [placeholder]="'Enter your username'"
      [control]="usernameControl"
      [disabled]="false"
    ></lib-text-field>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibTextFieldComponent } from 'ng-mat-plus/lib-forms';
    
    @Component({
      selector: 'app-text-field-demo',
      standalone: true,
      imports: [LibTextFieldComponent],
      template: \`
        <lib-text-field
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="usernameControl"
          [disabled]="isDisabled"
        ></lib-text-field>
      \`,
    })
    export class TextFieldDemoComponent {
      label = signal('Username');
      placeholder = signal('Enter your username');
      usernameControl = new FormControl('', [Validators.required]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-text-field-demo',
      standalone: true,
      imports: [LibTextFieldComponent],
      template: \`
        <lib-text-field
          [label]="'Email'"
          [placeholder]="'Enter your email'"
          [control]="emailControl"
        ></lib-text-field>
      \`,
    })
    export class TextFieldDemoComponent {
      emailControl = new FormControl('', [Validators.required, Validators.email]);
    }
  `;

  formControlExample = `
    // In your component class
    profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email])
    });

    // In template
    <form [formGroup]="profileForm">
      <lib-text-field
        [label]="'First Name'"
        [control]="profileForm.controls.firstName"
      ></lib-text-field>
      
      <lib-text-field
        [label]="'Last Name'"
        [control]="profileForm.controls.lastName"
      ></lib-text-field>
    </form>
  `;

  validationExample = `
    // Custom validator function
    function passwordValidator(control: FormControl) {
      const value = control.value;
      const hasNumber = /[0-9]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const valid = hasNumber && hasUpper && hasLower;
      return valid ? null : { passwordStrength: true };
    }

    // In component
    passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator
    ]);

    // Error messages
    getPasswordErrors() {
      if (this.passwordControl.hasError('required')) {
        return 'Password is required';
      }
      if (this.passwordControl.hasError('minlength')) {
        return 'Password must be at least 8 characters';
      }
      if (this.passwordControl.hasError('passwordStrength')) {
        return 'Password must contain numbers, uppercase and lowercase letters';
      }
      return '';
    }
  `;

  dynamicExample = `
    @Component({
      selector: 'app-dynamic-text-fields',
      template: \`
        <div *ngFor="let field of fields()">
          <lib-text-field
            [label]="field.label"
            [placeholder]="field.placeholder"
            [control]="field.control"
          ></lib-text-field>
        </div>
      \`,
    })
    export class DynamicTextFieldsComponent {
      fields = signal<
        Array<{
          label: string;
          placeholder: string;
          control: FormControl;
        }>
      >([]);

      addField() {
        this.fields.update(fields => [
          ...fields,
          {
            label: 'Field ' + (fields.length + 1),
            placeholder: 'Enter value',
            control: new FormControl('')
          }
        ]);
      }
    }
  `;
}