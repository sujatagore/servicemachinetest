import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TodoformComponent } from './shared/component/todo/todoform/todoform.component';
import { TodocardComponent } from './shared/component/todo/todocard/todocard.component';
import { FormsModule } from '@angular/forms';
import { StdformComponent } from './shared/component/std/stdform/stdform.component';
import { StdtableComponent } from './shared/component/std/stdtable/stdtable.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodocardComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
