import { Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ComponentOne } from './shared-ui/tab/first-tab.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'ng-mat-plus - Library',
    data: { breadcrumb: 'Home' }
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Components Routes
      {
        path: 'components',
        children: [
          {
            path: '',
            redirectTo: 'form-fields/text-field',
            pathMatch: 'full',
          },
          {
            path: 'form-fields',
            data: { breadcrumb: 'Form Fields' },
            children: [
              {
                path: '',
                redirectTo: 'text-field',
                title: 'Components / Form Fields',
                pathMatch: 'full',
              },
              {
                path: 'text-field',
                title: 'ng-mat-plus - Form Fields / Text Field',
                data: { breadcrumb: 'Text Field' },
                loadComponent: () =>
                  import('./shared-ui/text-field-input/text-field-input-doc.component').then((m) => m.TextFieldInputDocComponent),
              },
              {
                path: 'email',
                title: 'ng-mat-plus - Form Fields / Email Input',
                data: { breadcrumb: 'Email Input' },
                loadComponent: () =>
                  import('./shared-ui/email-input/email-input-doc.component').then((m) => m.EmailInputDocComponent),
              },
              {
                path: 'password',
                title: 'ng-mat-plus - Form Fields / Password Input',
                data: { breadcrumb: 'Password Input' },
                loadComponent: () =>
                  import('./shared-ui/password-input/password-input-doc.component').then((m) => m.PasswordInputDocComponent),
              },
              {
                path: 'phone',
                title: 'ng-mat-plus - Form Fields / Phone Input',
                data: { breadcrumb: 'Phone Input' },
                loadComponent: () =>
                  import('./shared-ui/phone-input/phone-input-doc.component').then((m) => m.PhoneInputDocComponent),
              },
              {
                path: 'number',
                title: 'ng-mat-plus - Form Fields / Number Input',
                data: { breadcrumb: 'Number Input' },
                loadComponent: () =>
                  import('./shared-ui/number-input/number-input-doc.component').then((m) => m.NumberInputDocComponent),
              },
              {
                path: 'url',
                title: 'ng-mat-plus - Form Fields / URL Input',
                data: { breadcrumb: 'URL Input' },
                loadComponent: () =>
                  import('./shared-ui/url-input/url-doc.component').then((m) => m.UrlDocComponent),
              },
              {
                path: 'checkbox',
                title: 'ng-mat-plus - Form Fields / Checkbox Input',
                data: { breadcrumb: 'Checkbox' },
                loadComponent: () =>
                  import('./shared-ui/checkbox-input/checkbox-input-doc.component').then((m) => m.CheckboxInputDocComponent),
              },
              {
                path: 'radio-btn',
                title: 'ng-mat-plus - Form Fields / Radio Buttons',
                data: { breadcrumb: 'Radio Buttons' },
                loadComponent: () =>
                  import('./shared-ui/radio-btn/radio-btn-doc.component').then((m) => m.RadioBtnDocComponent),
              },
              {
                path: 'select',
                title: 'ng-mat-plus - Form Fields / Select Input',
                data: { breadcrumb: 'Select' },
                loadComponent: () =>
                  import('./shared-ui/select-input/select-input-doc.component').then((m) => m.SelectInputDocComponent),
              },
              {
                path: 'multi-select',
                title: 'ng-mat-plus - Form Fields / Multi Select Input',
                data: { breadcrumb: 'Multi Select' },
                loadComponent: () =>
                  import('./shared-ui/multi-select-input/multi-select-input-doc.component').then((m) => m.MultiSelectInputDocComponent),
              },
              {
                path: 'date-picker',
                title: 'ng-mat-plus - Form Fields / Date Picker',
                data: { breadcrumb: 'Date Picker' },
                loadComponent: () =>
                  import('./shared-ui/date-picker-input/date-picker-input-doc.component').then((m) => m.DatePickerDocComponent),
              },
              {
                path: 'date-range-picker',
                title: 'ng-mat-plus - Form Fields / Date Range Picker',
                data: { breadcrumb: 'Date Range Picker' },
                loadComponent: () =>
                  import('./shared-ui/date-ranger-picker-input/date-range-picker-input-doc.component').then((m) => m.DateRangePickerDocComponent),
              },
              {
                path: 'month',
                title: 'ng-mat-plus - Form Fields / Month Picker',
                data: { breadcrumb: 'Month Picker' },
                loadComponent: () =>
                  import('./shared-ui/month-input/month-input-doc.component').then((m) => m.MonthPickerDocComponent),
              },
              {
                path: 'week',
                title: 'ng-mat-plus - Form Fields / Week Picker',
                data: { breadcrumb: 'Week Picker' },
                loadComponent: () =>
                  import('./shared-ui/week-input/week-input-doc.component').then((m) => m.WeekDocComponent),
              },
              {
                path: 'time-picker',
                title: 'ng-mat-plus - Form Fields / Time Picker',
                data: { breadcrumb: 'Time Picker' },
                loadComponent: () =>
                  import('./shared-ui/time-picker-input/time-picker-input-doc.component').then((m) => m.TimePickerDocComponent),
              },
              {
                path: 'array-form',
                title: 'ng-mat-plus - Form Fields / Array Form',
                data: { breadcrumb: 'Array Form' },
                loadComponent: () =>
                  import('./shared-ui/array-form/array-form-doc.component').then((m) => m.ArrayFormDocComponent),
              },
              {
                path: 'object-to-form',
                title: 'ng-mat-plus - Form Fields / Object to Form',
                data: { breadcrumb: 'Object to Form' },
                loadComponent: () =>
                  import('./shared-ui/dynamic-object-form/dynamic-object-form-doc.component').then((m) => m.DynamicObjectFormDocComponent),
              },
              {
                path: 'autocomplete',
                title: 'ng-mat-plus - Form Fields / Autocomplete Input',
                data: { breadcrumb: 'Autocomplete' },
                loadComponent: () =>
                  import('./shared-ui/autocomplete-input/autocomplete-input-doc.component').then((m) => m.AutocompleteInputDocComponent),
              },
              {
                path: 'autocomplete-server',
                title: 'ng-mat-plus - Form Fields / Autocomplete Server Input',
                data: { breadcrumb: 'Autocomplete' },
                loadComponent: () =>
                  import('./shared-ui/autocomplete-input-server/autocomplete-input-server-doc.component').then((m) => m.AutocompleteServerInputDocComponent),
              },
              {
                path: 'textarea',
                title: 'ng-mat-plus - Form Fields / Textarea',
                data: { breadcrumb: 'Textarea' },
                loadComponent: () =>
                  import('./shared-ui/textarea/textarea-doc.component').then((m) => m.TextareaDocComponent),
              },
            ],
          },
          {
            path: 'all-buttons',
            title: 'ng-mat-plus - Components / Buttons',
            data: { breadcrumb: 'Buttons' },
            loadComponent: () =>
              import('./shared-ui/all-buttons/all-buttons-doc.component').then((m) => m.AllButtonsDocComponent),
          },
          {
            path: 'search',
            title: 'ng-mat-plus - Form Fields / Search',
            data: { breadcrumb: 'Search' },
            loadComponent: () =>
              import('./shared-ui/search-input/search-input-doc.component').then((m) => m.SearchInputDocComponent),
          },
          {
            path: 'loader',
            title: 'ng-mat-plus - Components / Loader',
            data: { breadcrumb: 'Loader' },
            loadComponent: () =>
              import('./shared-ui/loader/loader-doc.component').then((m) => m.LoaderDocComponent),
          },
          {
            path: 'progress-bar',
            title: 'ng-mat-plus - Components / Progress Bar',
            data: { breadcrumb: 'Progress Bar' },
            loadComponent: () =>
              import('./shared-ui/progress-bar/progress-bar-doc.component').then((m) => m.ProgressBarDocComponent),
          },
          {
            path: 'tooltip',
            title: 'ng-mat-plus - Components / Tooltip',
            data: { breadcrumb: 'Tooltip' },
            loadComponent: () =>
              import('./shared-ui/tooltip/tooltip-doc.component').then((m) => m.TooltipDocComponent),
          },
          {
            path: 'expansion-panel',
            title: 'ng-mat-plus - Components / Expansion-Panel',
            data: { breadcrumb: 'Expansion-Panel' },
            loadComponent: () =>
              import('./shared-ui/expansion-panel/expansion-panel-doc.component').then((m) => m.ExpansionPanelDocComponent),
          },
          {
            path: 'paginator',
            title: 'ng-mat-plus - Components / Paginator',
            data: { breadcrumb: 'Paginator' },
            loadComponent: () =>
              import('./shared-ui/paginator/paginator-doc.component').then((m) => m.PaginatorDocComponent),
          },
          {
            path: 'modals',
            title: 'ng-mat-plus - Components / Modals',
            data: { breadcrumb: 'Modals' },
            loadComponent: () =>
              import('./shared-ui/modals/modals-doc.component').then((m) => m.ModalsDocComponent),
          },
          {
            path: 'tab',
            loadComponent: () =>
              import('./shared-ui/tab/tab.component-doc.component').then((m) => m.TabDocComponent),
            children: [
              {
                path: '',
                redirectTo: 'first',
                pathMatch: 'full',
              },
              {
                path: 'first',
                title: 'ng-mat-plus - Tab / First Tab',
                data: { breadcrumb: 'Tab' },
                component: ComponentOne,
              },
              // {
              //   path: 'third',
              //   title: 'ng-mat-plus - Tab / Third Tab',
              //   data: { breadcrumb: 'Third Tab' },
              //   loadComponent: () =>
              //     import('./shared-ui/tab/third-tab.component').then((m) => m.ComponentThird),
              // },
            ],
          },
          {
            path: 'table',
            data: { breadcrumb: 'Tables' },
            children: [
              {
                path: '',
                redirectTo: 'basic-table/client-side',
                pathMatch: 'full',
              },
              {
                path: 'basic-table',
                data: { breadcrumb: 'Basic Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'ng-mat-plus - Table / Basic / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/basic-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'ng-mat-plus - Table / Basic / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/basic-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
              {
                path: 'intermediate-table',
                data: { breadcrumb: 'Intermediate Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'ng-mat-plus - Table / Intermediate / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/intermediate-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'ng-mat-plus - Table / Intermediate / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/intermediate-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
              {
                path: 'advanced-table',
                data: { breadcrumb: 'Advanced Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'ng-mat-plus - Table / Advanced / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/advanced-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'ng-mat-plus - Table / Advanced / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/advanced-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
            ],
          },
          {
            path: 'card',
            data: { breadcrumb: 'Cards' },
            children: [
              {
                path: '',
                redirectTo: 'widget',
                pathMatch: 'full'
              },
              {
                path: 'widget',
                data: { breadcrumb: 'Widget Card' },
                loadComponent: () => import('./shared-ui/cards/widget-card/widget-card-doc.component').then((m) => m.WidgetDocComponent),
              }
            ]
          },
          {
            path: 'list',
            data: { breadcrumb: 'Lists' },
            children: [
              {
                path: '',
                redirectTo: 'notification-card',
                pathMatch: 'full'
              },
              {
                path: 'notification-card',
                data: { breadcrumb: 'Notification Card' },
                loadComponent: () => import('./shared-ui/lists/notification-card/notification-card-doc.component').then((m) => m.NotificationCardDocComponent),
              },
              {
                path: 'card',
                data: { breadcrumb: 'Card' },
                loadComponent: () => import('./shared-ui/lists/card/card-doc.component').then((m) => m.CardDocComponent),
              },
            ]
          },
          {
            path: 'menu',
            data: { breadcrumb: 'Menu' },
            loadComponent: () => import('./shared-ui/menu/menu-doc.component').then((m) => m.MenuDocComponent),
          },
          {
            path: 'sidepanel',
            title: 'ng-mat-plus - Components / Side Panel',
            loadComponent: () => import('./shared-ui/sidepanel/sidepanel-doc.component').then((m) => m.SidePanelDocComponent),
          },
          {
            path: 'content-editor',
            title: 'ng-mat-plus - Components / Content Editor',
            loadComponent: () => import('./shared-ui/content-editor/content-editor.component').then((c) => c.ContentEditorComponent)
          }
        ],
      },
      // Services Routes
      {
        path: 'services',
        data: { breadcrumb: 'Services' },
        children: [
          {
            path: '',
            redirectTo: 'data-transfer',
            pathMatch: 'full',
          },
          {
            path: 'data-transfer',
            title: 'ng-mat-plus - Services / Data Transfer',
            data: { breadcrumb: 'Data Transfer' },
            loadComponent: () =>
              import('./service-class/data-transfer/data-transfer-doc.component').then((m) => m.DataTransferDocComponent),
          },
          {
            path: 'breadcrumb-service',
            title: 'ng-mat-plus - Services / Breadcrumb Service',
            data: { breadcrumb: 'Breadcrumb' },
            loadComponent: () =>
              import('./service-class/data-transfer/breadcrumb-doc.component').then((m) => m.BreadcrumbDocComponent),
          },
          {
            path: 'theme-service',
            title: 'ng-mat-plus - Services / Dark Light Theme Service',
            data: { breadcrumb: 'Dark Light Theme' },
            loadComponent: () =>
              import('./service-class/data-transfer/theme-dark-light-doc.component').then((m) => m.ThemeDarkLightDocComponent),
          },
          {
            path: 'encrypt-decrypt',
            title: 'ng-mat-plus - Services / Encrypt & Decrypt',
            data: { breadcrumb: 'Encrypt & Decrypt' },
            loadComponent: () =>
              import('./service-class/data-transfer/encrypt-decrypt-service-doc.component').then((m) => m.EncryptDecryptServiceDocComponent),
          },
          {
            path: 'toast-service',
            title: 'ng-mat-plus - Components / Toasts',
            data: { breadcrumb: 'Toasts' },
            loadComponent: () =>
              import('./shared-ui/toasts/toasts-doc.component').then((m) => m.ToastsDocComponent),
          },
          {
            path: 'debouncing-service',
            title: 'ng-mat-plus - Services / Debouncing Service',
            data: { breadcrumb: 'Debouncing' },
            loadComponent: () =>
              import('./service-class/data-transfer/debounce-service-doc.component').then((m) => m.DebouncingServiceDocComponent),
          },
          {
            path: 'throttling-service',
            title: 'ng-mat-plus - Services / Throttling Service',
            data: { breadcrumb: 'Throttling' },
            loadComponent: () =>
              import('./service-class/data-transfer/throttling-service-doc.component').then((m) => m.ThrottlingDocComponent),
          },
        ],
      },
      // API Routes
      {
        path: 'api',
        data: { breadcrumb: 'API' },
        children: [
          {
            path: '',
            redirectTo: 'crud-resource',
            pathMatch: 'full',
          },
          {
            path: 'crud-resource',
            title: 'ng-mat-plus - API / Crud Resource API',
            data: { breadcrumb: 'Crud Resource API' },
            loadComponent: () =>
              import('./api-call/crud-resources/crud-resources-doc.component').then((m) => m.CrudResourceDocComponent),
          },
          {
            path: 'fetch-subscribe',
            title: 'ng-mat-plus - API / Fetch Subscribe API',
            data: { breadcrumb: 'Fetch Subscribe API' },
            loadComponent: () =>
              import('./api-call/fetch-subscribe/fetch-subscribe.doc.component').then((m) => m.FetchSubscribeDocComponent),
          },
          {
            path: 'to-signal',
            title: 'ng-mat-plus - API / To Signal API',
            data: { breadcrumb: 'To Signal API' },
            loadComponent: () =>
              import('./api-call/tosignal/tosignal-doc.component').then((m) => m.ToSignalDocComponent),
          },
          {
            path: 'http-resource',
            title: 'ng-mat-plus - API / Http Resource API',
            data: { breadcrumb: 'Http Resource API' },
            loadComponent: () =>
              import('./api-call/http-resource/http-resource-doc.component').then((m) => m.ResourceDocComponent),
          }
        ],
      },
      // Theming Routes
      {
        path: 'theming',
        data: { breadcrumb: 'Theming' },
        children: [
          {
            path: '',
            redirectTo: 'typography-color',
            pathMatch: 'full',
          },
          {
            path: 'typography-color',
            title: 'ng-mat-plus - Components / Typography & Color',
            data: { breadcrumb: 'Typography & Color' },
            loadComponent: () =>
              import('./shared-ui/typography-color/typography-color-doc.component').then((m) => m.TypographyColorDocComponent),
          },
        ],
      },
      // Layout Routes
      {
        path: 'layout',
        data: { breadcrumb: 'Layout' },
        children: [
          {
            path: '',
            redirectTo: 'authentication',
            pathMatch: 'full',
          },
          {
            path: 'typography-color',
            title: 'ng-mat-plus - Components / Typography & Color',
            data: { breadcrumb: 'Typography & Color' },
            loadComponent: () =>
              import('./shared-ui/typography-color/typography-color-doc.component').then((m) => m.TypographyColorDocComponent),
          }
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
