import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibMatFlatButtonComponent } from "ng-mat-plus/lib-buttons";
import { LibSidePanelComponent } from "ng-mat-plus/lib-sidepanel";

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [LibMatFlatButtonComponent, LibSidePanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lib-mat-flat-button (matClick)="panel.open()">{{panel.isOpen() ? 'Close Side Panel' : 'Open Side Panel'}}</lib-mat-flat-button>
    <lib-sidepanel #panel>
        Side Panel
    </lib-sidepanel>
  `,
  styles: ``
})
export class SidePanelComponent {

}