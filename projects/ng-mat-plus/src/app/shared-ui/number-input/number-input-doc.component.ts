import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { NumberInputComponent } from './number-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-number-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="numberComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="     px-1 py-0.5 rounded ">&lt;lib-number&gt;</code> component is a numeric input field with built-in validation and step controls. It provides a user-friendly way to handle numeric inputs with proper type enforcement and formatting.
        </p>
        
        <div class="   border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Validation Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several validation-focused features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Type enforcement (numeric values only)</li>
                  <li>Minimum and maximum value constraints</li>
                  <li>Step increment/decrement controls</li>
                  <li>FormControl integration for validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Numeric input with type enforcement</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>Step increment/decrement buttons</li>
          <li>Minimum and maximum value constraints</li>
          <li>Responsive design</li>
          <li>Accessibility support (ARIA attributes)</li>
          <li>Error state visualization</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Basic Number Input</h3>
            <p class="mt-2 text-gray-600">
              Standard number input field with label and placeholder in a form context.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">FormGroup Integration</h3>
            <p class="mt-2 text-gray-600">
              Using the number field within a FormGroup with validation.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Range Validation</h3>
            <p class="mt-2 text-gray-600">
              Implementing minimum and maximum value constraints.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="rangeValidationExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium  ">Validation Notes</h3>
              <div class="mt-2 text-sm ">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always implement server-side validation in addition to client-side</li>
                  <li>Consider edge cases like decimal values when step="1"</li>
                  <li>Be aware of JavaScript number precision limitations</li>
                  <li>Provide clear error messages for validation failures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="  p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 " fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium ">UX Recommendations</h3>
              <div class="mt-2 text-sm ">
                <p>
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Provide clear input constraints (min, max, step)</li>
                  <li>Consider adding increment/decrement buttons</li>
                  <li>Give immediate feedback on validation errors</li>
                  <li>Use appropriate step values for the context (1 for integers, 0.01 for currency)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Usage</h2>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Custom Step Controls</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom increment/decrement buttons with different step values.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customStepExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-600">Input Properties</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="   ">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class=" divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the number field (default: 'Number')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Enter a number')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The FormControl instance for this input</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the input is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">step</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The step increment/decrement value (default: 1)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">min</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Minimum allowed value</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">max</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Maximum allowed value</td>
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
export class NumberInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  numberComponent = NumberInputComponent;
  publishedDate = '2025-11-08';
  title = 'Number Input Component';

  htmlCode = `
    <lib-number
      [label]="'Quantity'"
      [placeholder]="'Enter quantity'"
      [control]="quantityControl"
      [step]="1"
      [min]="0"
      [max]="100"
    ></lib-number>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibNumberComponent } from 'ng-mat-plus/lib-forms';
    
    @Component({
      selector: 'app-number-demo',
      standalone: true,
      imports: [LibNumberComponent],
      template: \`
        <lib-number
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="quantityControl"
          [step]="step()"
        ></lib-number>
      \`,
    })
    export class NumberDemoComponent {
      label = signal('Quantity');
      placeholder = signal('Enter quantity');
      quantityControl = new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]);
      step = signal(1);
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-number-demo',
      standalone: true,
      imports: [LibNumberComponent],
      template: \`
        <lib-number
          [label]="'Age'"
          [placeholder]="'Enter your age'"
          [control]="ageControl"
          [step]="1"
          [min]="18"
          [max]="120"
        ></lib-number>
      \`,
    })
    export class NumberDemoComponent {
      ageControl = new FormControl(25, [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(0.01)
      ]),
      quantity: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000)
      ])
    });

    // In template
    <form [formGroup]="productForm">
      <lib-number
        [label]="'Quantity'"
        [control]="productForm.controls.quantity"
        [min]="1"
        [max]="1000"
        [step]="1"
      ></lib-number>
    </form>
  `;

  rangeValidationExample = `
    // In component
    temperatureControl = new FormControl(20, [
      Validators.required,
      Validators.min(-50),
      Validators.max(50)
    ]);

    // In template
    <lib-number
      [label]="'Temperature (°C)'"
      [placeholder]="'Enter temperature'"
      [control]="temperatureControl"
      [min]="-50"
      [max]="50"
      [step]="0.1"
    ></lib-number>
    
    <div *ngIf="temperatureControl.hasError('min')" class="error-message">
      Temperature must be at least -50°C
    </div>
    <div *ngIf="temperatureControl.hasError('max')" class="error-message">
      Temperature must be at most 50°C
    </div>
  `;

  customStepExample = `
    // In component
    quantityControl = new FormControl(1, [Validators.required]);
    stepValue = 5;

    increment() {
      const currentValue = this.quantityControl.value || 0;
      this.quantityControl.setValue(currentValue + this.stepValue);
    }

    decrement() {
      const currentValue = this.quantityControl.value || 0;
      this.quantityControl.setValue(Math.max(0, currentValue - this.stepValue));
    }

    // In template
    <lib-number
      [label]="'Bulk Quantity'"
      [control]="quantityControl"
      [min]="0"
      [step]="stepValue"
    ></lib-number>
    
    <div class="flex gap-2 mt-2">
      <button (click)="decrement()" class="btn-secondary">
        Decrease by {{stepValue}}
      </button>
      <button (click)="increment()" class="btn-primary">
        Increase by {{stepValue}}
      </button>
    </div>
  `;
}