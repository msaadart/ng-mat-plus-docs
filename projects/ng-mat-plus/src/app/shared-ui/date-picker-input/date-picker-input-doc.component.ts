import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DatePickerInputComponent } from './date-picker-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-date-picker-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="datePickerComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="     px-1 py-0.5 rounded ">&lt;lib-date-picker&gt;</code> component provides a user-friendly date selection interface with Angular Material integration. It supports form control binding, validation, and customizable display options.
        </p>
        
        <div class="   border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-on-primary-container">Key Features</h3>
              <div class="mt-2 text-sm text-on-primary-container">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Seamless integration with Angular Reactive Forms</li>
                  <li>Customizable labels and placeholders</li>
                  <li>Disabled state support</li>
                  <li>Built-in validation support</li>
                  <li>Responsive design</li>
                  <li>Accessibility compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Component Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Automatically formats dates according to locale</li>
          <li>Provides visual feedback for invalid dates</li>
          <li>Supports both single date selection</li>
          <li>Integrates with Angular Material's theming</li>
          <li>Works with template-driven and reactive forms</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Basic Date Picker</h3>
            <p class="mt-2 text-on-surface">
              Standard date picker with default settings in a form context.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">FormGroup Integration</h3>
            <p class="mt-2 text-on-surface">
              Using the date picker within a FormGroup with validation.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Disabled State</h3>
            <p class="mt-2 text-on-surface">
              Showing how to use the disabled state of the date picker.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="disabledStateExample"></app-code-viewer>
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
                  <li>Always implement server-side validation for critical date logic</li>
                  <li>Consider timezone implications for your use case</li>
                  <li>Provide clear error messages for invalid dates</li>
                  <li>Test with different date formats based on user locale</li>
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
                  <li>Provide clear labels indicating the expected date format</li>
                  <li>Consider adding a calendar icon for better discoverability</li>
                  <li>Use min/max dates when applicable to guide user selection</li>
                  <li>Ensure the component works well on both desktop and mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-on-surface">Advanced Usage</h2>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Custom Date Validation</h3>
            <p class="mt-2 text-on-surface">
              Implementing custom date validation with specific requirements.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customValidationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Input Properties</h3>
            <p class="mt-2 text-on-surface">
              Complete list of available input properties.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="   ">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class=" divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">The label text for the date field (default: 'Select Date')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Placeholder text displayed when the input is empty (default: 'Pick a date')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">FormControl</td>
                  <td class="px-6 py-4 text-sm text-on-surface">The FormControl instance for this input</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Whether the input is disabled (default: false)</td>
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
export class DatePickerDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  datePickerComponent = DatePickerInputComponent;
publishedDate = '2025-11-08';
  title = 'Date Picker Input Component';

  htmlCode = `
    <lib-date-picker
      [label]="'Birth Date'"
      [placeholder]="'Select your birth date'"
      [control]="dateControl"
      [disabled]="false"
    ></lib-date-picker>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibDatePickerComponent } from 'ng-mat-plus/lib-forms';
    
    @Component({
      selector: 'app-date-picker-demo',
      standalone: true,
      imports: [LibDatePickerComponent],
      template: \`
        <lib-date-picker
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="dateControl"
          [disabled]="isDisabled"
        ></lib-date-picker>
      \`,
    })
    export class DatePickerDemoComponent {
      label = signal('Select Date');
      placeholder = signal('Pick a date');
      dateControl = new FormControl('', [Validators.required]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-date-picker-demo',
      standalone: true,
      imports: [LibDatePickerComponent],
      template: \`
        <lib-date-picker
          [label]="'Appointment Date'"
          [placeholder]="'Select appointment date'"
          [control]="appointmentDateControl"
        ></lib-date-picker>
      \`,
    })
    export class DatePickerDemoComponent {
      appointmentDateControl = new FormControl('', [Validators.required]);
    }
  `;

  formControlExample = `
    // In your component class
    registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      birthDate: new FormControl('', [Validators.required])
    });

    // In template
    <form [formGroup]="registrationForm">
      <lib-date-picker
        [label]="'Birth Date'"
        [control]="registrationForm.controls.birthDate"
      ></lib-date-picker>
    </form>
  `;

  disabledStateExample = `
    @Component({
      selector: 'app-date-picker-demo',
      standalone: true,
      imports: [LibDatePickerComponent],
      template: \`
        <lib-date-picker
          [label]="'Event Date'"
          [control]="eventDateControl"
          [disabled]="true"
        ></lib-date-picker>
      \`,
    })
    export class DatePickerDemoComponent {
      eventDateControl = new FormControl({ value: '2025-06-15', disabled: true });
    }
  `;

  customValidationExample = `
    // Custom validator for future dates only
    function futureDateValidator(control: FormControl) {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return selectedDate >= today ? null : { pastDate: true };
    }

    // In component
    eventDateControl = new FormControl('', [
      Validators.required,
      futureDateValidator
    ]);

    // In template
    <lib-date-picker
      [label]="'Event Date'"
      [placeholder]="'Must be in the future'"
      [control]="eventDateControl"
    ></lib-date-picker>
    
    <div *ngIf="eventDateControl.hasError('pastDate')" class="error-message">
      Event date must be in the future
    </div>
  `;
}