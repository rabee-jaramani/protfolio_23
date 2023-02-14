import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
    name: yup
        .string('')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string('Enter your message')
        .required('Message is required')
});

const MyForm = () => {
    const form = useRef()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('form.current', form.current)
            emailjs.sendForm('service_d3ptlw2', 'template_th2ja7e',
                // {
                //     from_name: values.name,
                //     name: values.name,
                //     message: values.message,
                //     email: values.email,
                // }
                form.current
                , 'AvX035Y6qWQu4vbP0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} ref={form}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    style={{ padding: '5px 5px 20px 5px' }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{ padding: '5px 5px 20px 5px' }}
                />
                <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    style={{ padding: '5px 5px 20px 5px', border: 'none' }}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};


export default MyForm;

