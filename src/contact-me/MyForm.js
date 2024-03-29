import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Loader from "../loader/Loader";

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
    const [message_sent, setMessage_sent] = useState(false)
    const [sending, setSending] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setSending(true)
            emailjs.sendForm('service_d3ptlw2', 'template_th2ja7e',
                form.current
                , 'AvX035Y6qWQu4vbP0')
                .then((result) => {
                    setSending(false)
                    setMessage_sent(true)
                }, (error) => {
                    console.log(error.text);
                });

        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} ref={form} style={{ maxWidth: '100% !important' }}>
                <TextField
                    disabled={message_sent}
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
                    disabled={message_sent}
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
                    disabled={message_sent}
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

                {!message_sent ? (
                    sending ?
                        <Loader class_name='form-loader' message='Submitting' width='50px' height='50px' /> :
                        <Button disabled={sending} color="primary" variant="contained" fullWidth type="submit">Submit</Button>
                )

                    :
                    <p className='thanks-label'>Thanks for your message, will get back to you asap 👍</p>
                }

            </form>
        </div>
    );
};


export default MyForm;

