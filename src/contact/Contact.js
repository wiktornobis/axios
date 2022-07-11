import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { Field } from './Field';

import './_contacts.scss';

function Contact() {
    const validate = Yup.object({
        name: Yup.string()
            .min(3, 'Musi zawierać conajmniej 3 znaki!')
            .required('Podane imię jest nieprawidłowe!'),
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        message: Yup.string()
            .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
            .required('Wiadomość musi mieć conajmniej 120 znaków!'),
    })
    return (
        <div id='kontakt' className="contact">
            <div className="contact_left">
      
            </div>
            <div className="contact_right">
                <h3 className="contact_right_title">Skontaktuj się z nami</h3>
                
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={validate}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);   
                    }}
                >
                    {formik => (
                        <div className='contact_right_form'>
                            <Form>
                                <div className="contact_right_form_first">
                                    <div className="contact_right_form_first-name">
                                        <TextField label="Wpisz swoje imię" 
                                                   name="name" type="text" 
                                                   placeholder='Krzysztof' 
                                        />
                                    </div>
                                    <div className="contact_right_form_first-name">
                                        <TextField label="Email" 
                                                   name="email" 
                                                   type="email" 
                                                   placeholder='abc@xyz.pl' 
                                        />
                                    </div>
                                </div>
                                <div className="contact_right_form_first-text">
                                    <Field 
                                        className="contact_right_form_first-text-area" 
                                        label="Wpisz swoją wiadomość" 
                                        name="message" 
                                        type="message" 
                                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                                    />
                                </div>
                                <div className="contact_right_form_first-btn">
                                    <button className="contact_right_form_first-btn-submit" 
                                            type="submit"
                                    >
                                        Wyślij
                                    </button> 
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>  
            </div>
            <div className="footer">
                <h3 className="footer_title">Copyright by Wiktor Nobis</h3>
            </div>
        </div>
    );
}

export default Contact;