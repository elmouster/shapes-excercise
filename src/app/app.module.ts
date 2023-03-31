import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShapesService } from './shapes.service';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ShapeEditComponent } from './shape-edit/shape-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    SquareComponent,
    RectangleComponent,
    ShapeEditComponent
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
