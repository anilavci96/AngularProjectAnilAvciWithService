import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ViewComponent } from './view/view.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
