import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { Container, Title, SubTitle, LinkCTA } from './style';
import { Logo } from 'assets/images/Logo';
import { PrimaryBtn, LinkedinBtn } from './Buttons';
import { TextInput } from './TextInput';
import { ROUTES } from 'components/common';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup
        .string()
        .matches(/^.{6,}$/, 'Must have at least 6 characters.')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .required('Password is required')
        .oneOf([yup.ref('password')], "Password don't match")
});

export function RegisterApp() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const {
        errors,
        touched,
        isValid,
        values,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleRegister(values, resetForm);
        }
    });

    const handleRegister = ({ email, password }, resetForm) => {
        register(email, password).then(() => {
            resetForm();
            navigate(ROUTES.updateUser);
        });
    };

    return (
        <Container>
            <Logo />
            <Title>Register</Title>
            <LinkedinBtn />
            <SubTitle>or</SubTitle>
            <TextInput
                type='email'
                label='Email'
                name='email'
                placeholder='john.doe@gmail.com'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : undefined}
            />
            <TextInput
                type='password'
                label='password'
                name='password'
                placeholder='Password'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password ? errors.password : undefined}
            />
            <TextInput
                type='password'
                label='Confirm Password'
                name='confirmPassword'
                placeholder='Password'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                }
            />
            <p>
                I agree to the Meteowrite
                <LinkCTA to={ROUTES.terms}> Terms and Conitions.</LinkCTA>
            </p>
            <PrimaryBtn
                margin={{ top: 22, bottom: 32 }}
                onClick={handleSubmit}
                disabled={!isValid}
                type='submit'
            >
                Create account
            </PrimaryBtn>
            <p>
                Already have an account?
                <LinkCTA to={ROUTES.login}> Login</LinkCTA>
            </p>
        </Container>
    );
}

// function RegisterStep1({ setStep }) {
//     return (
//         <>
//             <Title>Register</Title>
//             <LinkedinBtn />
//             <SubTitle>or</SubTitle>
//             <TextInput
//                 type='email'
//                 label='Email'
//                 placeholder='john.doe@gmail.com'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />
//             <TextInput
//                 type='password'
//                 label='password'
//                 placeholder='Password'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />
//             <TextInput
//                 type='password'
//                 label='Confirm Password'
//                 placeholder='Password'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />
//             <p>
//                 I agree to the Meteowrite
//                 <LinkCTA to={ROUTES.terms}> Terms and Conitions.</LinkCTA>
//             </p>
//             <PrimaryBtn
//                 margin={{ top: 22, bottom: 32 }}
//                 onClick={() => setStep(2)}
//             >
//                 Create account
//             </PrimaryBtn>
//             <p>
//                 Already have an account?
//                 <LinkCTA to={ROUTES.login}> Login</LinkCTA>
//             </p>
//         </>
//     );
// }

// function RegisterStep2() {
//     const { login } = useAuth();
//     const {
//         errors,
//         touched,
//         isValid,
//         values,
//         handleBlur,
//         handleChange,
//         handleSubmit
//     } = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validationSchema,
//         onSubmit: (values, { resetForm }) => {
//             handleLogin(values, resetForm);
//         }
//     });

//     return (
//         <>
//             <Title margin={{ bottom: 8 }}>Basic information</Title>
//             <p
//                 style={{
//                     fontSize: '14px',
//                     lineHeight: '19px',
//                     textAlign: 'center'
//                 }}
//             >
//                 This is a placeholder description of why we need to know this
//                 type of information.
//             </p>
//             <TextInput
//                 type='text'
//                 label='First Name'
//                 placeholder='John'
//                 width='100%'
//                 margin={{ top: 48, bottom: 16 }}
//             />
//             <TextInput
//                 type='text'
//                 label='Last Name'
//                 placeholder='Doe'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />
//             <TextInput
//                 type='text'
//                 label='Company'
//                 placeholder='Where are you working right now?'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />
//             <TextInput
//                 type='text'
//                 label='Company role'
//                 placeholder='What is your role in the company?'
//                 width='100%'
//                 margin={{ top: 16, bottom: 16 }}
//             />

//             <PrimaryBtn margin={{ top: 22, bottom: 32 }}>sign up</PrimaryBtn>
//         </>
//     );
// }
