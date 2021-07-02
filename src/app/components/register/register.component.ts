import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public title: string = 'Registration page'

  public registerForm: FormGroup | any;

  public createRegisterForm() {
    this.registerForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      password_repeated: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        CustomValidator.passwordRepeatedValidator(this.registerForm.get("password"))
      ]),
      // agree:new FormControl('' ,[])
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();

    console.log(this.passControl.value);
  }

  public onSubmit(value: any) {
    console.log(value);
    console.warn(this.registerForm.value);
  }

  get emailControl(): AbstractControl {
    return this.registerForm.get('email') as AbstractControl;
  }
  get passControl(): AbstractControl {
    return this.registerForm.get('password') as AbstractControl;
  }
  get passRepControl(): AbstractControl {
    return this.registerForm.get('password_repeated') as AbstractControl;
  }
}
