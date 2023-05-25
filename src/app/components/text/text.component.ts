import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent {
  @Input() textTitleChildren: string = ''
  @Input() textParagraphChildren: string = ''
}
