import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { ModalsComponent } from './modals.component';

@Component({
  selector: 'app-modals-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [component]="modalsComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-6">
        <p class="text-on-surface">
          The <code class="     px-1 py-0.5 rounded ">LibDialogService</code> is a robust Angular service designed to manage Material Design dialogs with extensive customization options. It supports dynamic components, predefined modal types (warning, confirmation, delete, success, info), and flexible styling using Tailwind CSS.
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
                  <li>Dynamic component rendering within dialogs</li>
                  <li>Predefined modal types for common scenarios (warning, confirmation, delete, success, info)</li>
                  <li>Customizable button titles and styling</li>
                  <li>Support for Material icons with configurable classes</li>
                  <li>Flexible dialog sizing, positioning, and backdrop options</li>
                  <li>Accessibility-compliant with auto-focus and keyboard navigation</li>
                  <li>Dialog stack management for multiple simultaneous modals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Content Options</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li><strong>Dynamic Component</strong>: Inject any Angular component into the dialog content area.</li>
          <li><strong>Message</strong>: Display simple text or HTML content with customizable styling.</li>
          <li><strong>Header Icon</strong>: Use Material icons to visually indicate dialog purpose.</li>
          <li><strong>Action Buttons</strong>: Configure buttons with custom titles, colors, and click handlers.</li>
          <li><strong>Header Buttons</strong>: Add custom buttons to the dialog header for additional actions.</li>
          <li><strong>Custom Styling</strong>: Apply Tailwind CSS classes to headers, messages, buttons, and containers.</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Predefined Warning Modal</h3>
            <p class="mt-2 text-on-surface">
              Displays a warning modal with a single customizable "Ok" button for irreversible actions.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="warningModalExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Confirmation Modal with Custom Buttons</h3>
            <p class="mt-2 text-on-surface">
              Opens a confirmation dialog with customizable "Cancel" and "Proceed" button titles.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="confirmationModalExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Dynamic Component Modal</h3>
            <p class="mt-2 text-on-surface">
              Renders a custom Angular component inside the dialog with data injection.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicComponentExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Delete Confirmation Modal</h3>
            <p class="mt-2 text-on-surface">
              Prompts the user to confirm deletion with a customizable item name and button titles.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="deleteModalExample"></app-code-viewer>
          </div>
        </div>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Success and Info Modals</h3>
            <p class="mt-2 text-on-surface">
              Displays success or informational messages with customizable button titles.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="successInfoModalExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium  ">Important Notes</h3>
              <div class="mt-2 text-sm ">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always unsubscribe from the dialog's <code>afterClosed()</code> Observable to prevent memory leaks.</li>
                  <li>Ensure dynamic components are properly declared in the module or are standalone.</li>
                  <li>Test modal behavior on mobile devices to verify responsiveness.</li>
                  <li>Use <code>disableClose: true</code> for critical actions to prevent accidental dismissal.</li>
                  <li>Validate Tailwind CSS classes are available in your project configuration.</li>
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
              <h3 class="text-sm font-medium ">Performance Tips</h3>
              <div class="mt-2 text-sm ">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Lazy-load complex dynamic components to improve initial load time.</li>
                  <li>Reuse modal configurations for similar dialogs to reduce code duplication.</li>
                  <li>Limit simultaneous open dialogs to avoid performance degradation.</li>
                  <li>Destroy dynamic components properly using the dialog stack management.</li>
                  <li>Use <code>ChangeDetectionStrategy.OnPush</code> for dynamic components to optimize rendering.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-on-surface">Configuration Reference</h2>
        
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">IDialogConfig Properties</h3>
            <p class="mt-2 text-on-surface">
              Comprehensive list of configuration options for the <code>openDialog</code> method.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="   ">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider">Default</th>
                </tr>
              </thead>
              <tbody class=" divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">title</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dialog title displayed in the header</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">titleClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the title</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">message</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Message content below the header</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">messageClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the message</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerContainerClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the header container</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerButtons</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">IDialogHeaderButton[]</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Array of header buttons for additional actions</td>
                  <td class="px-6 py-4 text-sm text-on-surface">[]</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerIcon</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Material icon name for the header</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerIconClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the header icon</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">showCloseIcon</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Show a close icon in the header</td>
                  <td class="px-6 py-4 text-sm text-on-surface">false</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">closeIconClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the close icon</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerMiddleContent</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">any | () => any</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Custom content for the header's middle section</td>
                  <td class="px-6 py-4 text-sm text-on-surface">null</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">headerMiddleContentClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the header middle content</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">buttonsContainerClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string | () => string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the action buttons container</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">component</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">Type&lt;any&gt;</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dynamic component to render inside the dialog</td>
                  <td class="px-6 py-4 text-sm text-on-surface">null</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">componentData</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">any</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Data to pass to the dynamic component</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">actionsButtons</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">IDialogActionButton[]</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Array of action buttons for the dialog footer</td>
                  <td class="px-6 py-4 text-sm text-on-surface">[]</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">width</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dialog width (e.g., '500px')</td>
                  <td class="px-6 py-4 text-sm text-on-surface">'400px'</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">maxWidth</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Maximum dialog width</td>
                  <td class="px-6 py-4 text-sm text-on-surface">'400px'</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">minWidth</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Minimum dialog width</td>
                  <td class="px-6 py-4 text-sm text-on-surface">undefined</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">height</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dialog height (e.g., 'auto')</td>
                  <td class="px-6 py-4 text-sm text-on-surface">'auto'</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">disableClose</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Prevent closing via backdrop or ESC</td>
                  <td class="px-6 py-4 text-sm text-on-surface">false</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">disableBackdropClick</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Prevent closing via backdrop click</td>
                  <td class="px-6 py-4 text-sm text-on-surface">false</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">autoFocus</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Enable auto-focus on dialog open</td>
                  <td class="px-6 py-4 text-sm text-on-surface">false</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">backdropClass</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">string</td>
                  <td class="px-6 py-4 text-sm text-on-surface">CSS class for the backdrop</td>
                  <td class="px-6 py-4 text-sm text-on-surface">''</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">position</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">object</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dialog position eg: top, bottom</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Dialog position eg: middle</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">closeOnNavigation</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Close dialog on navigation</td>
                  <td class="px-6 py-4 text-sm text-on-surface">true</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">hasBackdrop</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-on-surface">boolean</td>
                  <td class="px-6 py-4 text-sm text-on-surface">Show dialog backdrop</td>
                  <td class="px-6 py-4 text-sm text-on-surface">true</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div class=" shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-on-surface">Dialog Stack Management</h3>
            <p class="mt-2 text-on-surface">
              Manage multiple open dialogs using the internal dialog stack.
            </p>
          </div>
          <div class="  px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dialogStackExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class ModalsDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  modalsComponent = ModalsComponent;
  publishedDate = '2025-11-08';
  title = 'Lib Dialog Service Documentation';

  tsCode = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-example',
      template: \`<button (click)="openDialog()">Open Modal</button>\`
    })
    export class ExampleComponent {
      constructor(private dialogService: LibDialogService) {}
      
      openDialog() {
        this.dialogService.openDialog({
          title: 'Confirm Action',
          message: 'Are you sure you want to proceed?',
          actionsButtons: [
            { buttonTitle: 'Cancel', onClick: () => this.dialogService.close(), color: 'warn' },
            { buttonTitle: 'Confirm', onClick: () => this.dialogService.close(true), color: 'primary' }
          ]
        }).subscribe(result => {
          console.log('Dialog result:', result);
        });
      }
    }
  `;

  warningModalExample = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-warning',
      template: \`<button (click)="showWarning()">Show Warning</button>\`
    })
    export class WarningComponent {
      constructor(private dialogService: LibDialogService) {}
      
      showWarning() {
        this.dialogService.openWarningModal(
          'This action cannot be undone. Proceed with caution.',
          'Acknowledge'
        ).subscribe(result => {
          if (result) {
            console.log('User acknowledged the warning');
          }
        });
      }
    }
  `;

  confirmationModalExample = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-confirmation',
      template: \`<button (click)="confirmAction()">Confirm Action</button>\`
    })
    export class ConfirmationComponent {
      constructor(private dialogService: LibDialogService) {}
      
      confirmAction() {
        this.dialogService.openConfirmationModal(
          'Do you want to save changes?',
          'Discard',
          'Save'
        ).subscribe(confirmed => {
          if (confirmed) {
            this.saveChanges();
          }
        });
      }
      
      private saveChanges() {
        // Save logic here
      }
    }
  `;

  deleteModalExample = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-delete',
      template: \`<button (click)="deleteItem()">Delete Item</button>\`
    })
    export class DeleteComponent {
      constructor(private dialogService: LibDialogService) {}
      
      deleteItem() {
        this.dialogService.openDeleteModal(
          'user profile',
          'Keep',
          'Remove'
        ).subscribe(confirmed => {
          if (confirmed) {
            this.performDelete();
          }
        });
      }
      
      private performDelete() {
        // Delete logic here
      }
    }
  `;

  successInfoModalExample = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-status',
      template: \`
        <button (click)="showSuccess()">Show Success</button>
        <button (click)="showInfo()">Show Info</button>
      \`
    })
    export class StatusComponent {
      constructor(private dialogService: LibDialogService) {}
      
      showSuccess() {
        this.dialogService.openSuccessModal('Operation completed!', 'Close').subscribe();
      }
      
      showInfo() {
        this.dialogService.openInfoModal('Check the new updates.', 'Understood').subscribe();
      }
    }
  `;

  dynamicComponentExample = `
    import { Component, Inject } from '@angular/core';
    import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-user-modal',
      template: \`
        <div class="p-4">
          <h2 class="text-lg font-semibold">Edit User: {{ data.name }}</h2>
          <input [(ngModel)]="data.name" class="border rounded p-2 w-full mt-2" />
          <div class="flex justify-end gap-2 mt-4">
            <button (click)="close()" class="bg-gray-200 px-4 py-2 rounded">Cancel</button>
            <button (click)="save()" class="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        </div>
      \`
    })
    export class UserModalComponent {
      constructor(
        public dialogRef: MatDialogRef<UserModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string }
      ) {}
      
      save() {
        this.dialogRef.close({ saved: true, data: this.data });
      }
      
      close() {
        this.dialogRef.close({ saved: false });
      }
    }

    @Component({
      selector: 'app-parent',
      template: \`<button (click)="openUserModal()">Edit User</button>\`
    })
    export class ParentComponent {
      constructor(private dialogService: LibDialogService) {}
      
      openUserModal() {
        this.dialogService.openDialog({
          component: UserModalComponent,
          componentData: { id: 123, name: 'John Doe' },
          width: '500px',
          title: 'Edit User Profile',
          titleClass: 'text-blue-600 text-lg font-semibold'
        }).subscribe(result => {
          if (result?.saved) {
            console.log('Saved data:', result.data);
          }
        });
      }
    }
  `;

  dialogStackExample = `
    import { Component } from '@angular/core';
    import { LibDialogService } from './lib-dialog.service';

    @Component({
      selector: 'app-stack',
      template: \`
        <button (click)="openMultipleDialogs()">Open Multiple Dialogs</button>
      \`
    })
    export class StackComponent {
      constructor(private dialogService: LibDialogService) {}
      
      openMultipleDialogs() {
        this.dialogService.openInfoModal('First dialog opened.', 'Next').subscribe(() => {
          this.dialogService.openSuccessModal('Second dialog opened!', 'Done').subscribe();
        });
        
        const currentComponent = this.dialogService.getCurrentComponentInstance();
        console.log('Current dialog component:', currentComponent);
      }
    }
  `;
}