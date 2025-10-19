import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LibContentEditorComponent } from "ng-mat-plus/lib-content-editor";

@Component({
    selector: '',
    imports: [LibContentEditorComponent],
    template: `
    <lib-content-editor (contentChange)="contentChange($event)" (htmlChange)="htmlChange($event)"></lib-content-editor>
    <div [innerHTML]=""></div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentEditorComponent {
    contentChange(event: any): void {
        console.log('event', event);
    }

    htmlChange(event: any): void {
        console.log('event', event);
    }
}