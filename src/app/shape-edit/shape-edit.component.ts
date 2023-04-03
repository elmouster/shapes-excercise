import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Shape, Circle, Rectangle, Square } from '../shape.model';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-shape-edit',
  templateUrl: './shape-edit.component.html',
  styleUrls: ['./shape-edit.component.css']
})

export class ShapeEditComponent implements OnInit, OnDestroy {
  subscribtion: Subscription = new Subscription;
  shapes: (Circle | Rectangle | Square)[] = [];
  form!: FormGroup;
  Square = Square;
  Circle = Circle;
  Rectangle = Rectangle;

  constructor(private shapeService: ShapesService) { }
  
  ngOnInit(): void {
    this.subscribtion = this.shapeService.getShapes().subscribe(
      (gotShapes) => {
        if (gotShapes.length) {
        this.shapes = gotShapes as (Circle | Rectangle | Square)[];
          this.buildForm(gotShapes);
        }
      }
    );
  };

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  onShapesEditSubmit(): void {

  };

  buildForm(shapes : Shape[]) {
    const formShapes: {[key: number]: FormControl} = {};

    shapes.forEach((shapeEdit, index) => {
      if (shapeEdit instanceof Circle) {
        formShapes[index] = new FormControl({radius: shapeEdit.radius});
      }
      if (shapeEdit instanceof Square) {
        formShapes[index] = new FormControl({size: shapeEdit.size});
      }
      if (shapeEdit instanceof Rectangle) {
        formShapes[index] = new FormControl({width: shapeEdit.width, length: shapeEdit.length});
      }
    })

    this.form = new FormGroup(formShapes);
  }
}