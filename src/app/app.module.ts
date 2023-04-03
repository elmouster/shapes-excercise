import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShapesService } from './shapes.service';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ShapeEditComponent } from './shape-edit/shape-edit.component';
import { TypeOfShapePipe } from './type-of-shape.pipe';
import { CastToPipe } from './cast-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    SquareComponent,
    RectangleComponent,
    ShapeEditComponent,
    TypeOfShapePipe,
    CastToPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    ShapesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
