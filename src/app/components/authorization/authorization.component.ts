import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public title: string = 'Login page'

  public autorizationForm: FormGroup | any;

  public createAutorizationForm() {
    this.autorizationForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ]),
      remember:new FormControl('', [
        Validators.required
      ])
  });
  }

  constructor() { }

  ngOnInit(): void {
    this.createAutorizationForm();
  }

  public onSubmit(value: any) {
    console.log(value);
    console.warn(this.autorizationForm.value);
  }

}
