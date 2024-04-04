import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    to_name: 'Admin',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {} // Inject FormBuilder instead of FormGroup

  async send() {
    emailjs.init('-8OAsCeb0mhkkURgz');
    let response = await emailjs.send('service_8qb7jeq', 'template_7quqzx3', {
      to_name: this.form.value.from_name,
      from_name: this.form.value.from_email,
      form_number: this.form.value.subject,
      message: this.form.value.message,
    });
    alert('message has been send');
    this.form.reset();
  }
}
