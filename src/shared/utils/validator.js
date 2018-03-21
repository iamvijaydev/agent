export const validator = (keys = [], data = {}, rules = {}) => {
    const isEmpty = string => !string.trim().length
    const notEmail = email => !/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email)
    const numbOnly = string => string.split('').filter(i => !isNaN(parseInt(i, 10)))
    const invalidPhone = string => numbOnly(string).length !== 11

    let isValid = true;
    let messages = {};

    // check if any field is invalid
    // also set a local msg for that field
    keys.forEach(key => {
        if (!!rules[key]) {
            const rule = rules[key]
            let msg = ''

            // find an invalid entry
            const inValid = rule.findIndex(ruleName => {

                if (ruleName === 'notEmpty' && isEmpty(data[key])) {
                    msg = 'This field cannot be empty'
                    return true
                } else if (ruleName === 'isEmail' && notEmail(data[key])) {
                    msg = 'Please enter a valid email'
                    return true
                } else if (ruleName === 'isPhone' && invalidPhone(data[key])) {
                    msg = 'Please enter a valid phone number'
                    return true;
                }

                return false
            })

            // set the message for invalid field
            // tag as invalid
            if (inValid > -1) {
                messages[key] = msg
                isValid = false
            }
        }
    })

    return {
        isValid,
        messages
    };
}