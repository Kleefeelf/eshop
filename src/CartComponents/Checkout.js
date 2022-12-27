import React from "react";
import {useDispatch} from "react-redux"
import { Formik, Field, ErrorMessage, Form } from "formik";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";
import ErrorMsg from "./ErrorMsg";
import '../style/checkout.css'
import { Link, useHistory } from "react-router-dom";
import { deleteAllTickets } from "../Store/ticketsDelAll";

function Checkout () {
    const dispatch = useDispatch()
    const history = useHistory()
    return(
    <div>
        <Header />
        <h1>Checkout</h1>
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: ""
            }}
            validate={values => {
                const errors = {};

                if (!values.firstName) {
                    errors.firstName = "Field Required"
                } else if (
                    !(/^[A-Za-z\s]+$/).test(values.firstName)
                ) {
                    errors.firstName = "No special characters"
                }

                if (!values.lastName) {
                    errors.lastName = "Field Required"
                } else if (
                    !(/^[A-Za-z\s]+$/).test(values.lastName)
                ) {
                    errors.lastName = "No special characters"
                }

                if (!values.email) {
                    errors.email = 'Field Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.phone) {
                    errors.phone = 'Field Required'
                } else if (
                    !/^[0-9]+$/.test(values.phone)
                ) {
                    errors.phone = "Use only numbers"
                }

                if (!values.address) {
                    errors.address = 'Field Required'
                } else if (
                    !/^[a-zA-Z0-9 / - . ,]+$/.test(values.address)
                ) {
                    errors.address = "Do not use <*$%^&!?> "
                }

                return errors;
            }}
            onSubmit={() => {
                dispatch(deleteAllTickets())
                history.push('/cart/checkout/success')
            }}
        >
            {({ isSubmitting }) => (
                <Form >
                    <div className="form-wrapper">
                        <div className="credentials-wrapper">
                            <div className="fio-wrapper">
                                <div>
                                    <div>First name</div>
                                    <Field type="text" name="firstName" className="fn" />
                                    <ErrorMessage name="firstName">{msg => <ErrorMsg msg={msg}/>}</ErrorMessage>
                                </div>
                                <div>
                                    <div>Last name</div>
                                    <Field type="text" name="lastName" className="ln" />
                                    <ErrorMessage name="lastName">{msg => <ErrorMsg msg={msg}/>}</ErrorMessage>
                                </div>
                            </div>
                            <div className="tel-mail">
                                <div>
                                    <div>Email</div>
                                    <Field type="email" name="email" className="email" />
                                    <ErrorMessage name="email">{msg => <ErrorMsg msg={msg}/>}</ErrorMessage>
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <Field type="tel" name="phone" className="phone" />
                                    <ErrorMessage name="phone">{msg => <ErrorMsg msg={msg}/>}</ErrorMessage>
                                </div>
                            </div>
                            <div>Address</div>
                            <Field type="text" name="address" className="address" />
                            <ErrorMessage name="address">{msg => <ErrorMsg msg={msg}/>}</ErrorMessage>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="/cart" className="back-button">Back to cart</Link>
                        <Field type="submit" name="submit" value="Continue" className="submit" />
                    </div>
                </Form>
            )}
        </Formik>
        <Footer />
    </div>
)}

export default Checkout;