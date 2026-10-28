// app.module.ts  (Angular 16 - TypeScript)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './exp7';   // app.component

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
