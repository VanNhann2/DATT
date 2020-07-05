import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {isValid} from '../../../utils/phone-utils';

export const DEFAULT_COUNTRY = 'VN';

export function validatePhone(c: FormControl) {
    let rs = false;
    try {
        isValid(c.value, DEFAULT_COUNTRY);
        rs = true;
    } catch (e) {

    }
    return rs ? null : {
        validatePhone: {
            valid: false
        }
    };
}

export function phoneValid(country: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } | null => {
        if (!c.value || c.value.toString().length === 0 || !country) {
            return null;
        }
        try {
            const phone = isValid(c.value, country || DEFAULT_COUNTRY);
            return null;
        } catch (e) {
            console.log(e);
        }
        return {
            validatePhone: {
                valid: false
            }
        };
    };
}
