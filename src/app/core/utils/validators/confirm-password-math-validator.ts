import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const ConfirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pass = control.get('password');
  const confirm = control.get('confirmPassword');
  if (confirm && confirm?.value?.length < 6) return null;
  return pass && confirm && pass.value !== confirm.value
    ? { confirmPassword: true }
    : null;
};
