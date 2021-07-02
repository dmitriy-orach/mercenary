import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CustomValidator {

    public static passwordRepeatedValidator(pass: string): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            debugger
            return (control.value !== pass) ? {Repeated: true}: null;
        }
    }
}