import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogConfirmationData } from '../../interfaces/dialog-confirmation-data.interface';

@Component({
  selector: 'app-confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrl: './confirmacao-dialog.component.scss'
})
export class ConfirmacaoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogConfirmationData) { }

}
