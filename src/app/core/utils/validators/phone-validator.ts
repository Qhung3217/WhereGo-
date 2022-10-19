import { FormControl } from '@angular/forms';
import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

export function phoneValidator(control: FormControl) {
  const phone = control.value;
  if (phone != null) {
    if (phone === '') return null;
    console.log(phone, isValidPhoneNumber(phone, 'VN' as CountryCode));
    if (isValidPhoneNumber(phone, 'VN' as CountryCode)) return null;
    return { isValidPhone: true };
  }
  return null;
}
