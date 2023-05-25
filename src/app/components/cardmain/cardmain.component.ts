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
  constructor(private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  captureOptionNumber(numberO: string) {
    this.pruebaNumero = numberO;
    // console.log(this.pruebaNumero);
  }

  onSubmit() {
    console.log(this.pruebaNumero);
    this.router.navigate(['/secondary', this.pruebaNumero]);
  }
}
