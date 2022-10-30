import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const ConfirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pass = control.get('password') || control.get('newPassword');
  const confirm = control.get('confirmPassword');
  // console.log(pass, confirm?.value?.length);
  if (confirm && confirm?.value?.length < 1) return null;
  return pass && confirm && pass.value !== confirm.value
    ? { confirmPassword: true }
    : null;
};
