export const idValidate = (id) => {
    const idRegex = /^[a-zA-Z0-9]{5,}$/
    return idRegex.test(id);
}

export const nameValidate = (name) => {
    const nameRegex = /^[가-힣a-zA-Z]{2,}$/
    return nameRegex.test(name);
}

export const  phoneValidate = (phone) => {
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    return phoneRegex.test(phone);
}

export const emailValidate = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}

export const passwordValidate = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
}