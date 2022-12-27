import {  useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from "formik";
import ErrorMsg from '../CartComponents/ErrorMsg';
import '../style/login.css'
import setTrue from '../Store/setTrue'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function LoginBody() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [logged, setLogged] = useState(true)
    const history = useHistory()
    const dispatch = useDispatch()
    var log = localStorage.getItem("login")
    var pass = localStorage.getItem("pass")

    return (
        <div>
            <Formik
                initialValues={{
                    login: "",
                    password: ""
                }}
                validate={values => {
                    const errors = {};

                    if (!values.login) {
                        errors.login = 'Field Required';
                    }
                    else setLogin(values.login)

                    if (!values.password) {
                        errors.password = 'Field Required';
                    }
                    else setPassword(values.password)

                    return errors;
                }}
                onSubmit={() => {
                    if (log !== login || pass !== password) {
                        setLogged(false)                        
                    }
                    else {
                        setLogged(true)
                        localStorage.setItem("logged", true);
                        dispatch(setTrue())
                        history.push('/catalog')
                    }
                    console.log(login, password)
                    
                }}
            >
                {() => (
                    <Form >
                        <div className="login-wrapper">
                            <h1>Sign in</h1>
                            <div className="login-form-wrapper">
                                <div>
                                    <div>Login</div>
                                    <Field type="text" name="login" className="login" maxlength="45" />
                                    <ErrorMessage name="login">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>
                                </div>

                                <div>Password</div>
                                <Field type="password" name="password" className="password" />
                                <ErrorMessage name="password">{msg => <ErrorMsg msg={msg} />}</ErrorMessage>
                            </div>
                        </div>
                        <div className="sign-in-wrapper">
                            <Field type="submit" name="submit" value="Login me" className="sign-in"/>
                            {logged ? "" : <ErrorMsg msg="Login or password are incorect"/>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginBody