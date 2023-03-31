import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})

export class CircleComponent {
  @Input() radius: number = 0;
  @Input() form!: FormGroup;
  @Input() name: number = 0;
}
