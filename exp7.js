// app.component.ts  (Angular 16 - TypeScript)
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './exp7.html'   // app.component.html
})
export class AppComponent {
  submitted = false;
  constructor(private fb: FormBuilder) {}
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  submit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      this.contactForm.reset();
    }
  }
}
