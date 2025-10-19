import { Component, inject } from '@angular/core';
import { LibMatButtonComponent } from 'ng-mat-plus/lib-buttons';
import { LibDataTransferService, LibDataTransferSignalService } from 'ng-mat-plus/services';
import { IUser } from './data-transfer.component';

@Component({
  selector: 'app-send-data-transfer',
  imports: [LibMatButtonComponent],
  template: `
    <p>
      Hit to UserProfile subcribe function
      <lib-mat-button color="accent" (matClick)="sendDataUserProfile()">update user data</lib-mat-button>
      <br />
      <!-- update signal variable value -->
      Hit to update first user through signal variable
      <lib-mat-button color="accent" (matClick)="updateFirstUser()">Update First User</lib-mat-button>
    </p>
  `,
  styles: ``
})
export class SendDataTransferComponent {
  constructor(private $dataTransferService: LibDataTransferService) { }

  sendDataUserProfile(): void {
    this.$dataTransferService.setData<IUser[]>('userProfile', [{ name: 'saad', age: 34 },{ name: 'sunny', age: 35 }]);
  }


  /////////////////////////// Signal ///////////////////////////
  private $dataService = inject(LibDataTransferSignalService);

  updateFirstUser() {
    this.$dataService.updateItem<IUser>('users', 0, { name: 'muhammad saad nasir', age: 28 });
  }

}