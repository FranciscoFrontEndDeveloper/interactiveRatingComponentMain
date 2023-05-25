import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.sass'],
})
export class SecondaryComponent {
  numberOptionSelected: string | null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.numberOptionSelected = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
