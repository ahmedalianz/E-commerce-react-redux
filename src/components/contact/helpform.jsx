import React,{useState} from 'react'
import FormComp from './formcomp'
import Submit from './../about/form/submit';
export default function HelpForm() {
    const [step, setStep] = useState(1)
    const next = () => {
        setStep(2)
    }
    switch (step) {
        case 1:
            return (
                <FormComp
                next={next}
                />
            )
        case 2:
            return(<Submit/>)
        default:
            return (<FormComp
                next={next}
                />)
    }
}
