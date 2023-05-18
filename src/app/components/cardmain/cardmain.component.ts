import { Component } from '@angular/core';

@Component({
  selector: 'app-cardmain',
  templateUrl: './cardmain.component.html',
  styleUrls: ['./cardmain.component.sass']
})
export class CardmainComponent {
  numberButtons: string[] = ["1", "2", "3", "4", "5"];
  typeButton: string = 'button';
  typeImage: string = 'image';
  typesubmit: string = 'submit';
  inputImg: string = '../../../assets/icon-star.svg'
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.inputImg)
  }
  
}
