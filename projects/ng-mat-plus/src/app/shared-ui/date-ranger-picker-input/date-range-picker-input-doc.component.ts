import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DateRangePickerInputComponent } from './date-ranger-picker-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-date-range-picker-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="dateRangePickerComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="     px-1 py-0.5 rounded ">&lt;lib-date-range-picker&gt;</code> component provides a user-friendly interface for selecting date ranges with Angular Material integration. It supports form control binding, validation, and customizable display options.
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
                  <li>Customizable labels, placeholders, and hints</li>
                  <li>FormGroup with start and end date controls</li>
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
          <li>Provides visual feedback for invalid date ranges</li>
          <li>Ensures end date is after start date</li>
          <li>Integrates with Angular Material's theming</li>
          <li>Works with template-driven and reactive forms</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Basic Date Range Picker</h3>
            <p class="mt-2 text-on-surface">
              Standard date range picker with default settings.
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
              Using the date range picker within a larger form with validation.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Custom Hint Text</h3>
            <p class="mt-2 text-on-surface">
              Showing how to customize the hint text below the input.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customHintExample"></app-code-viewer>
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
                  <li>Always validate that end date is after start date</li>
                  <li>Consider timezone implications for your use case</li>
                  <li>Provide clear error messages for invalid date ranges</li>
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
                  <li>Provide clear labels and hint text indicating the expected date format</li>
                  <li>Consider adding calendar icons for better discoverability</li>
                  <li>Use min/max dates when applicable to guide user selection</li>
                  <li>Ensure the component works well on both desktop and mobile</li>
                  <li>Highlight the selected range visually</li>
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
            <h3 class="text-lg font-medium text-on-surface">Custom Date Range Validation</h3>
            <p class="mt-2 text-on-surface">
              Implementing custom date range validation with specific requirements.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">range</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">FormGroup</td>
                  <td class="px-6 py-4 text-sm text-on-surface">FormGroup containing start and end date controls</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">The label text for the date range field (default: 'Enter a date range')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Placeholder text displayed when the input is empty</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">hint</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Hint text below the input (Example: 'MM/DD/YYYY – MM/DD/YYYY')</td>
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
export class DateRangePickerDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  dateRangePickerComponent = DateRangePickerInputComponent;
  publishedDate = '2025-05-21';
  title = 'Date Range Picker Input Component';

  htmlCode = `
    <lib-date-range-picker
      [range]="dateRange"
      label="Booking Period"
      placeholder="Select booking dates"
      hint="MM/DD/YYYY – MM/DD/YYYY"
    ></lib-date-range-picker>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { FormGroup, FormControl } from '@angular/forms';
    import { LibDateRangePickerComponent } from 'ng-mat-plus/lib-forms';
    
    @Component({
      selector: 'app-date-range-picker-demo',
      standalone: true,
      imports: [LibDateRangePickerComponent],
      template: \`
        <lib-date-range-picker
          [range]="dateRange"
          label="Booking Period"
          placeholder="Select booking dates"
          hint="MM/DD/YYYY – MM/DD/YYYY"
        ></lib-date-range-picker>
      \`,
    })
    export class DateRangePickerDemoComponent {
      dateRange = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
      });
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-date-range-picker-demo',
      standalone: true,
      imports: [LibDateRangePickerComponent],
      template: \`
        <lib-date-range-picker
          [range]="dateRange"
          label="Select Date Range"
        ></lib-date-range-picker>
      \`,
    })
    export class DateRangePickerDemoComponent {
      dateRange = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
      });
    }
  `;

  formControlExample = `
    // In your component class
    bookingForm = new FormGroup({
      guestName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      stayDates: new FormGroup({
        start: new FormControl<Date | null>(null, [Validators.required]),
        end: new FormControl<Date | null>(null, [Validators.required]),
      })
    });

    // In template
    <form [formGroup]="bookingForm">
      <lib-date-range-picker
        [range]="bookingForm.controls.stayDates"
        label="Stay Dates"
      ></lib-date-range-picker>
    </form>
  `;

  customHintExample = `
    @Component({
      selector: 'app-date-range-picker-demo',
      standalone: true,
      imports: [LibDateRangePickerComponent],
      template: \`
        <lib-date-range-picker
          [range]="dateRange"
          label="Event Dates"
          hint="Select start and end dates for your event"
        ></lib-date-range-picker>
      \`,
    })
    export class DateRangePickerDemoComponent {
      dateRange = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
      });
    }
  `;

  customValidationExample = `
    // Custom validator for minimum stay duration
    function minStayDurationValidator(minDays: number) {
      return (group: FormGroup) => {
        const start = group.get('start')?.value;
        const end = group.get('end')?.value;
        
        if (!start || !end) return null;
        
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays >= minDays ? null : { minDuration: true };
      };
    }

    // In component
    stayDates = new FormGroup({
      start: new FormControl<Date | null>(null, [Validators.required]),
      end: new FormControl<Date | null>(null, [Validators.required]),
    }, { validators: minStayDurationValidator(3) });

    // In template
    <lib-date-range-picker
      [range]="stayDates"
      label="Vacation Dates"
      hint="Minimum 3 night stay required"
    ></lib-date-range-picker>
    
    <div *ngIf="stayDates.hasError('minDuration')" class="error-message">
      Minimum stay duration is 3 nights
    </div>
  `;
}