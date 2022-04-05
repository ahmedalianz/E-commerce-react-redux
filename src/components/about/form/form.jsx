import "./form.css";

import React, { useEffect, useState } from "react";

const Form = (props) => {
  const { values, change, nextStep } = props;
  const [warning, setWarning] = useState("");
  const [warning2, setWarning2] = useState("");
  const [enablity, setEnable] = useState(false);
  useEffect(() => {
    let dateNow = new Date();
    let parsedNow = Date.parse(dateNow);
    if (values.available) {
      let chosenDate = Date.parse(values.available);
      if (parsedNow > chosenDate) {
        setWarning("يجب ان تختار تاريخ لاحق .  . !");
        setEnable(true);
      } else {
        setWarning("");
        setEnable(false);
      }
    }
    if (values.email) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        setWarning2("بريد غير صحيح");
        setEnable(true);
      } else {
        setWarning("");
        setEnable(false);
      }
    }
  }, [values.available, values.email]);
  return (
    <div className="text-center">
      <div>
        <form onSubmit={nextStep}>
          <img className="mb-4" src="images/logo.png" alt="" width="72" />
          <h1 className="h3 mb-3 fw-normal">من فضل ادخل البيانات الاتيه</h1>

          <div className="form-floating">
            <input
              required
              value={values.fName}
              onChange={change("fName")}
              type="text"
              className="form-control mb-3"
              id="floatingfName"
            />
            <label htmlFor="floatingfName">الااسم الاول</label>
          </div>
          <div className="form-floating">
            <input
              required
              value={values.lName}
              onChange={change("lName")}
              type="text"
              className="form-control mb-3"
              id="floatinglName"
            />
            <label htmlFor="floatinglName">اسم العائله</label>
          </div>
          <div className="form-floating">
            <input
              required
              value={values.email}
              onChange={change("email")}
              type="email"
              className="form-control mb-3"
              id="floatingInput"
            />
            <label htmlFor="floatingInput">البريد الالكتروني</label>
          </div>
          <span>{warning2}</span>
          <div className="form-floating">
            <input
              required
              value={values.phone}
              onChange={change("phone")}
              type="string"
              className="form-control mb-3"
              id="Phone"
            />
            <label htmlFor="Phone">رقم الهاتف</label>
          </div>
          <div className="form-floating">
            <select
              required
              id="position"
              className="form-control mb-3"
              onChange={change("position")}
              value={values.position}
            >
              <option disabled value="Select Position">
                اختر وظيفه
              </option>
              <option value="In-Store Sales">مبيعات</option>
              <option value="Store Leader">امين مخازن</option>
              <option value="In-Store Operation">عمليات داخليه</option>
              <option value="Warehouse , Logistics">مسئول مخزن </option>
              <option value="E-Commerce">مبيعات سوشبال ميديا</option>
            </select>
            <label htmlFor="position">الوظائف المتاحه</label>
          </div>
          <div className="form-floating">
            <input
              required
              value={values.available}
              onChange={change("available")}
              type="date"
              className="form-control mb-3"
              id="date"
            />
            <label htmlFor="date">الوقت المتاح للبدء</label>
          </div>
          <span>{warning}</span>
          <div className="form-floating">
            <input
              required
              value={values.link}
              onChange={change("link")}
              type="file"
              className="form-control mb-3"
              id="link"
            />
            <label htmlFor="link">سيرتك ائاتيه</label>
          </div>

          <button
            disabled={enablity}
            className="w-50 btn btn-lg btn-dark mt-2"
            type="submit"
          >
            تأكيد
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </div>
    </div>
  );
};
export default Form;
