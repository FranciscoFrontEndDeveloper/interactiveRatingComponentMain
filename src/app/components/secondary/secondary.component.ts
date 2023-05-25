import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.sass'],
})
export class SecondaryComponent {
  numberOptionSelected: string | null;
  textTitleFather: string = 'Thank you!'
  textParagraphFather: string = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
  constructor(private activatedRoute: ActivatedRoute) {
    this.numberOptionSelected = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
