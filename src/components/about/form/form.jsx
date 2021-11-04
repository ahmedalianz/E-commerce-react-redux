import React, { useState, useEffect } from 'react'
import './form.css'
const Form = (props) => {
    const { values, change, nextStep } = props
    const [warning, setWarning] = useState('')
    const [warning2, setWarning2] = useState('')
    const [enablity, setEnable] = useState(false)
    useEffect(() => {
        let dateNow = new Date()
        let parsedNow = Date.parse(dateNow)
        if (values.available) {
            let chosenDate = Date.parse(values.available)
            if (parsedNow > chosenDate) {
                setWarning('What?! , Please Choose a recent Date .  . !')
                setEnable(true)
            } else {
                setWarning('')
                setEnable(false)
            }
        }
        if (values.email) {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                setWarning2('Invalid Email Address')
                setEnable(true)
            } else {
                setWarning('')
                setEnable(false)
            }
        }
    }, [values.available, values.email])
    return (
        <div className='text-center'>
            <div>
                <form onSubmit={nextStep}>
                    <img className="mb-4" src="images/logo.png" alt="" width="72" />
                    <h1 className="h3 mb-3 fw-normal">Please Fill in The information below</h1>

                    <div className="form-floating">
                        <input required value={values.fName} onChange={change('fName')} type="text" className="form-control" id="floatingfName" />
                        <label htmlFor="floatingfName">First name</label>
                    </div>
                    <div className="form-floating">
                        <input required value={values.lName} onChange={change('lName')} type="text" className="form-control" id="floatinglName" />
                        <label htmlFor="floatinglName">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input required value={values.email} onChange={change('email')} type="email" className="form-control" id="floatingInput" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <span>{warning2}</span>
                    <div className="form-floating">
                        <input required value={values.phone} onChange={change('phone')} type="number" className="form-control" id="Phone" />
                        <label htmlFor="Phone">Phone</label>
                    </div>
                    <div className="form-floating">
                        <select required id="position" className="form-control" onChange={change('position')} value={values.position}>
                            <option disabled value='Select Position' >Select Position</option>
                            <option value='In-Store Sales' >In-Store Sales</option>
                            <option value='Store Leader' >Store Leader</option>
                            <option value='In-Store Operation' >In-Store Operation</option>
                            <option value='Warehouse , Logistics' >Warehouse , Logistics</option>
                            <option value='E-Commerce' >E-Commerce</option>
                        </select>
                        <label htmlFor="position">Position You Apply For</label>
                    </div>
                    <div className="form-floating">
                        <input required value={values.available} onChange={change('available')} type="date" className="form-control" id="date" />
                        <label htmlFor="date">Available Start Date</label>
                    </div>
                    <span>{warning}</span>
                    <div className="form-floating">
                        <input required value={values.link} onChange={change('link')} type='url' className="form-control" id="link" />
                        <label htmlFor="link">Link to Resume</label>
                    </div>

                    <button disabled={enablity} className="w-50 btn btn-lg btn-dark mt-2" type="submit">Confirm</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </div>
        </div>
    )
}
export default Form

