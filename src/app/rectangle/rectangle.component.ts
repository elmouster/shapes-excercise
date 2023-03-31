import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})

export class RectangleComponent {
  @Input() length = 0;
  @Input() width = 0;
  @Input() form!: FormGroup;
  @Input() name: number = 0;
}
