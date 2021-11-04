import React from 'react'
import { Formik, Form, Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
const initialValues = {
    fname:"",
    lname:"",
    email:"",
    subject:"",
    message:""
}
const validationSchema = Yup.object({
    fname: Yup.string().required('First Name Is required'),
    lname: Yup.string(),
    email: Yup.string().email('InValid Email Adress').required('You Have to provide us a valid E-mail so we can keep in touch'),
    subject: Yup.string().required('You Have To identify a subject to You message so it Goes to the right Department'),
    message: Yup.string().min(20,'You Have to Clarify Your Issue So we can Solve it').required('required')
})
export default function FormComp({ next }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {formik => {
                console.log(formik)
                const handleSubmit = (e) => {
                    e.preventDefault();
                    if (formik.isValid) {
                        next()
                    } else {
                        toast.error('Failed To Submit the Message')
                        }
                    }
                return (
                        <Form onSubmit={handleSubmit} className='contact-form'>
                <div className="form-floating">
                    <Field type="text" className="form-control" id="floatingPassword"  name='fname'/>
                    <label htmlFor="floatingPassword">First Name</label>
                    <span style={{ color: "red" }}>{formik.errors.fname}</span>
                </div>
                <div className="form-floating">
                    <Field type="text" className="form-control" id="floatingPassword" name='lname'/>
                    <label htmlFor="floatingPassword">Last Name</label>
                            <span style={{ color: "red" }}>{formik.errors.lname}</span>
                </div>

                <div className="form-floating">
                    <Field type="email" className="form-control" id="floatingInput" name='email'/>
                    <label htmlFor="floatingInput">Email address</label>
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                </div>
                <div className="form-floating">
                    <Field type="text" className="form-control" id="floatingPassword" name='subject'/>
                            <label htmlFor="floatingPassword">Subject</label>
                    <span style={{ color: "red" }}>{formik.errors.subject}</span>

                </div>
                <div className="form-floating">
                    <Field as='textarea' type="text" className="form-control" id="floatingPassword" name='message'></Field>
                    <label htmlFor="floatingPassword">Your Message here . . . .</label>
                    <span style={{ color: "red" }}>{formik.errors.message}</span>
                </div>
                <button onClick={()=>formik.validateForm()} type="submit">Submit</button>
            </Form>
                )
            }}
        </Formik>
        
    )
}
