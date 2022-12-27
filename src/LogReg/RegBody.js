import {useEffect, useState} from 'react'
import { Formik, Field, ErrorMessage, Form } from "formik";
import ErrorMsg from '../CartComponents/ErrorMsg';
import '../style/register.css'
function RegBody() {
    const [Login, setLogin] = useState("")
    const [Pass, setPass] = useState("")

    
    return (
        <div>
            <Formik
                initialValues={{
                    userName: "",
                    email: "",
                    password: "",
                    repass: ""
                }}
                validate={values => {
                    const errors = {};

                    if (!values.userName) {
                        errors.userName = 'Field Required';
                    }
                    else {setLogin(values.userName)}

                    if (!values.email) {
                        errors.email = 'Field Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Field Required';
                    }
                    else {setPass(values.password)}

                    if (!values.repass) {
                        errors.repass = 'Field Required';
                    } else if (
                        values.repass !== values.password
                    ) {
                        errors.repass = "Enter the same passwords for both fields   "
                    }


                    return errors;
                }}
                
                onSubmit={() => {
                    localStorage.setItem("login", Login)
                    localStorage.setItem("pass", Pass)
                    window.location.href = "/login"
                }}
            >
                {() => (
                    <Form >
                        <div className="login-wrapper">
                            <h1>Register a new account</h1>
                                <div className="login-form-wrapper">
                                <div>
                                    <div>Username</div>
                                    <Field type="text" name="userName" className="username" maxlength="45"/>
                                    <ErrorMessage name="userName">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>
                                </div>
                                <div>Email</div>
                                <Field type="email" name="email" className="login-email" />
                                <ErrorMessage name="email">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>

                                <div>Password</div>
                                <Field type="password" name="password" className="password" />
                                <ErrorMessage name="password">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>

                                <div>Retype Password</div>
                                <Field type="password" name="repass" className="repass" />
                                <ErrorMessage name="repass">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>
                            </div>
                        </div>
                        <div className="sign-in-wrapper">
                            <Field type="submit" name="submit" value="Sign up" className="sign-in" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegBody