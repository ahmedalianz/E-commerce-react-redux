import React, { Component } from 'react'
import './form.css'
import Form from './form'
import Confirm from './confirm'
import Submit from './submit'
export default class FormContainer extends Component {
    state = {
        fName: '',
        lName: '',
        email: '',
        phone: '',
        position: 'In-Store Sales',
        available: "",
        link: '',
        step: 1
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    nextStep = (e) => {
        e.preventDefault()
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }
    prevStep = (e) => {
        e.preventDefault();
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }

    render() {
        const { step,fName,lName, position, email,available, phone, link } = this.state
        const values = { fName, lName, position,email, available, phone, link }
        switch (step) {
            case 1:
                return (
                    <Form
                        nextStep={this.nextStep}
                        change={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        change={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Submit />
                )
            default:
                return (
                    <Form
                        nextStep={this.nextStep}
                        change={this.handleChange}
                        values={values}
                    />
                )

        }
    }
}