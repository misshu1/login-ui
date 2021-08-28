import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { Container, Title } from './style';
import { Logo } from 'assets/images/Logo';
import { PrimaryBtn } from './Buttons';
import { TextInput } from './TextInput';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'components/common';

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^.{3,}$/, 'Must have at least 3 characters.')
        .required('First Name is required'),
    lastName: yup
        .string()
        .matches(/^.{3,}$/, 'Must have at least 3 characters.')
        .required('First Name is required'),
    company: yup
        .string()
        .matches(/^.{3,}$/, 'Must have at least 3 characters.'),
    companyRole: yup
        .string()
        .matches(/^.{3,}$/, 'Must have at least 3 characters.')
});

export function BasicInformationApp() {
    const navigate = useNavigate();
    const { updateUser } = useAuth();
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
            firstName: '',
            lastName: '',
            company: '',
            companyRole: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleUpdateProfile(values, resetForm);
        }
    });

    const handleUpdateProfile = (
        { firstName, lastName, company, companyRole },
        resetForm
    ) => {
        updateUser(firstName, lastName, company, companyRole).then(() => {
            resetForm();
            navigate(ROUTES.verifyEmail);
        });
    };

    return (
        <Container>
            <Logo />
            <Title margin={{ bottom: 8 }}>Basic information</Title>
            <p
                style={{
                    fontSize: '14px',
                    lineHeight: '19px',
                    textAlign: 'center'
                }}
            >
                This is a placeholder description of why we need to know this
                type of information.
            </p>
            <TextInput
                type='text'
                label='First Name'
                name='firstName'
                placeholder='John'
                width='100%'
                margin={{ top: 48, bottom: 16 }}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName ? errors.firstName : undefined}
            />
            <TextInput
                type='text'
                label='Last Name'
                name='lastName'
                placeholder='Doe'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName ? errors.lastName : undefined}
            />
            <TextInput
                type='text'
                label='Company'
                name='company'
                placeholder='Where are you working right now?'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company ? errors.company : undefined}
            />
            <TextInput
                type='text'
                label='Company role'
                name='companyRole'
                placeholder='What is your role in the company?'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
                value={values.companyRole}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.companyRole ? errors.companyRole : undefined}
            />

            <PrimaryBtn
                margin={{ top: 22, bottom: 32 }}
                onClick={handleSubmit}
                disabled={!isValid}
                type='submit'
            >
                sign up
            </PrimaryBtn>
        </Container>
    );
}
