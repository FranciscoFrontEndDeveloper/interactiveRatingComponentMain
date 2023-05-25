import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardmain',
  templateUrl: './cardmain.component.html',
  styleUrls: ['./cardmain.component.sass'],
})
export class CardmainComponent {
  numberButtons: string[] = ['1', '2', '3', '4', '5'];
  typeButton: string = 'button';
  typeImage: string = 'image';
  typesubmit: string = 'submit';
  inputImg: string = '../../../assets/icon-star.svg';
  pruebaNumero!: string;
  textTitleFather: string = 'How did we do?'
  textParagraphFather: string = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
  constructor(private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  captureOptionNumber(numberO: string) {
    this.pruebaNumero = numberO;
  }

  onSubmit() {
    if (this.pruebaNumero) {
      this.router.navigate(['/secondary', this.pruebaNumero]);
    } else {
      this.router.navigate(['/secondary']);
    }
  }
}
