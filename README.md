Create a component that retrieves a list of shapes from the server and displays a form that allows to edit these shapes.
* Shapes can be of different type (circle, square, rectangle, etc.) and contain different set of properties (length, width, radius, etc.). 
* There can be any number of shapes in the list.
* The list can contain multiple shapes of the same type.


The form is saved by clicking "Save" button which should send all shapes back to the server.

Bonus points:
* Calculate area of the shape and display it.
* Implement functionality to add and remove shapes from the list.


Here is the code of shape models and a service which fakes communication with the server:
```typescript
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

export interface Shape {
  _type: string;
}

export class Circle implements Shape {
  _type: string = 'Circle';
  constructor (public radius: number) { }
}

export class Square implements Shape {
  _type: string = 'Square';
  constructor (public size: number) { }
}

export class Rectangle implements Shape {
  _type: string = 'Rectangle';
  constructor (public length: number, public width: number) { }
}

@Injectable()
export class ShapesService {
  private storedShapes: Shape[] = [
    new Square(15),
    new Circle(25),
    new Circle(12),
    new Rectangle(10, 20),
    new Square(10),
  ];

  getShapes (): Observable<Shape[]> {
    return of(this.storedShapes).pipe(delay(Math.random() * 1000));
  }

  saveShapes (shapes: Shape[]): Observable<Shape[]> {
    this.storedShapes = shapes;
    return of(this.storedShapes).pipe(delay(Math.random() * 1000));
  }
}
```
