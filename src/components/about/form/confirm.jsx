import React from 'react'
export default function Confirm(props) {
    return (
        <div className={` text-center`}>
            <div >
                <form onSubmit={props.nextStep}>
                    <img className="mb-4" src="images/logo.png" alt="" width="72" />
                    <h1 className="h3 mb-3 fw-normal">Please make sure the informations are correct and confirm</h1>

                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between">
                            <span>First Name :</span>
                            <span>{props.values.fName}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between">
                            <span>Last Name :</span>
                            <span>{props.values.lName}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between">
                            <span>E-mail : </span>
                            <span>{props.values.email}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between" >
                            <span>Phone :</span>
                            <span>{props.values.phone}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between"  >
                            <span>Position :</span>
                            <span>{props.values.position}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between">
                            <span>Available on :</span>
                            <span>{new Date(props.values.available).toDateString()}</span>
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className="form-control d-flex justify-content-between">
                            <span>Your Resume @ :</span>
                            <span>{props.values.link}</span>
                        </div>
                    </div>
                    <button onClick={props.prevStep} className="w-30 btn btn-lg btn-secondary m-2">Back</button>
                    <button className="w-30 btn btn-lg btn-primary m-2" type="submit">Confirm</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </div>
        </div>
    )
}
