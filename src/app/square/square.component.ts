import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {
  @Input() size = 0;
  @Input() form!: FormGroup;
  @Input() name: number = 0;
}
