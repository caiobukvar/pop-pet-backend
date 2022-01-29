const yup = require('yup');

const createUserSchema = yup.object().shape({
    name: yup
        .string()
        .strict()
        .required(),
    username: yup
        .string()
        .strict()
        .required(),
    cpf: yup
        .string()
        .strict()
        .required(),
    email: yup
        .string()
        .email()
        .strict()
        .required(),
    phone: yup
        .string()
        .strict()
        .required(),
    password: yup
        .string()
        .strict()
        .required()
        .oneOf(
            [yup.ref('confirmPassword'), null],
            "Passwords don't match!"),
    confirmPassword: yup
        .string()
        .strict()
        .required(),
    address: yup
        .required(),
    userName: yup
        .string()
        .required(),
});

module.exports = {
    createUserSchema,

}