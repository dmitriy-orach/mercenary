import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CustomValidator {

    public static emailValidator(): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            
        }
    }

    public static passwordRepeatedValidator(pass: string): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            return (control.value ! === pass) ? {Repeated: true}: null;
        }
    }
}