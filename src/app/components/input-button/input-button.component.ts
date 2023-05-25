import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.sass']
})
export class InputButtonComponent {

  @Input('ArryNumbers') ArryNumbers!: string;
  @Input('inputType') inputType!: string;
  @Input('inputSrc') inputSrc!: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
