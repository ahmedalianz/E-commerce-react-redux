import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";
import { toast } from "react-toastify";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  subject: "",
  message: "",
};
const validationSchema = Yup.object({
  fname: Yup.string().required("الاسم الاول مطلوب"),
  lname: Yup.string(),
  email: Yup.string()
    .email("بريد غير صحيح")
    .required("يجب ان تكتب بريد صالح حتي نستظيع التواصل معك"),
  subject: Yup.string().required(
    "يجب ان تحدد موضوع رسالتك حتي نستظيع توصيلها للقسم المختص"
  ),
  message: Yup.string()
    .min(20, "يجب ان توضح مشكلتك بتفصيل اكثر حتي نساعدك علي حلها")
    .required("مطلوب"),
});
export default function FormComp({ next }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => {
        console.log(formik);
        const handleSubmit = (e) => {
          e.preventDefault();
          if (formik.isValid) {
            next();
          } else {
            toast.error("Failed To Submit the Message");
          }
        };
        return (
          <Form onSubmit={handleSubmit} className="contact-form">
            <div className="form-floating">
              <Field
                type="text"
                className="form-control"
                id="floatingPassword"
                name="fname"
              />
              <label htmlFor="floatingPassword">الاسم الاول</label>
              <span style={{ color: "red" }}>{formik.errors.fname}</span>
            </div>
            <div className="form-floating">
              <Field
                type="text"
                className="form-control"
                id="floatingPassword"
                name="lname"
              />
              <label htmlFor="floatingPassword">اسم العائله</label>
              <span style={{ color: "red" }}>{formik.errors.lname}</span>
            </div>

            <div className="form-floating">
              <Field
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
              />
              <label htmlFor="floatingInput">البريد الالكتروني</label>
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            </div>
            <div className="form-floating">
              <Field
                type="text"
                className="form-control"
                id="floatingPassword"
                name="subject"
              />
              <label htmlFor="floatingPassword">الموضوع</label>
              <span style={{ color: "red" }}>{formik.errors.subject}</span>
            </div>
            <div className="form-floating">
              <Field
                as="textarea"
                type="text"
                className="form-control"
                id="floatingPassword"
                name="message"
              ></Field>
              <label htmlFor="floatingPassword">اترك رسالتك هنا . . . .</label>
              <span style={{ color: "red" }}>{formik.errors.message}</span>
            </div>
            <button onClick={() => formik.validateForm()} type="submit">
              تأكيد
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
