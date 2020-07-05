import { parsePhoneNumber } from 'libphonenumber-js';

export function isValid(phone, defaultCountry) {
    if (phone && (phone[0] !== '0' && phone[0] !== '+')) {
        phone = `+${phone}`;
    }
    const phoneNumber = parsePhoneNumber(phone, defaultCountry);
    if (phoneNumber.isValid() && phoneNumber.isPossible()) {
        return phoneNumber;
    } else {
        if(localStorage.getItem('aliceLanguage')==='vi_VN'){
            throw new Error(`Số điện thoại ${phone} không hợp lệ`);
        }else {
            throw new Error(`Invalid phone ${phone}`);
        }
        
    }
}

export function filter4Phone(rawString) {                                               
    if (rawString && rawString.length) {
        const isFirstPlus = rawString[0] === '+';
        rawString = (isFirstPlus ? '+' : '') + rawString.replace(/([^0-9\\+]+)/gi, '');
    }
    return rawString;
}
