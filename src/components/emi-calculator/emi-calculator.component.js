import { useState } from "react";

// here props is of object type and it is used to pass data from parent component to child component. It is a way to communicate between components in React. Props are read-only and cannot be modified by the child component. They are passed down from the parent component to the child component as an argument in the function component. In this case, we are not using props in our component, but we can still pass data to it if needed.

export function EmiCalculatorComponent(props) {
    const [amount, setAmount] = useState(0);
    const [years, setYears] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [emi, setEmi] = useState(0);

    function AmountChange(e) {
        setAmount(e.target.value);
    }

    function YearsChange(e) {
        setYears(e.target.value);
    }

    function InterestRateChange(e) {
        setInterestRate(e.target.value);
    }

    function calculateEMI() {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interestRate) / 12 / 100;
        const emi = (principal * calculatedInterest) / (1 - Math.pow(1 + calculatedInterest, -years * 12));
        setEmi(emi);
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center mt-4">{props.title}</h2>
            <div className="row mt-4 border border-dark border-2 p-4">
                <div className="col">
                    Amount you need &#36; <input type="text" size="5" value={amount} onChange={AmountChange} />
                </div>
                <div className="col">
                    for <input type="text" size="5" value={years} onChange={YearsChange} /> years
                </div>
                <div className="col">
                    at interest rate <input type="text" size="5" value={interestRate} onChange={InterestRateChange} /> %
                </div>
            </div>
            <div className="row mt-4 border border-dark border-2 p-4">
                <div className="col">
                    &#36; 10,000 <input type="range" onChange={AmountChange} min="10000" max="100000" /> &#36; 1,00,000
                </div>
                <div className="col">
                    1 year <input type="range" onChange={YearsChange} min="1" max="10" /> 10 years
                </div>
                <div className="col">
                    4.49% <input type="range" onChange={InterestRateChange} min="4.49" max="18.75" step="0.1" /> 18.75%
                </div>
            </div>

            <div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <button onClick={calculateEMI} className="btn btn-primary mt-4">Calculate EMI</button>
                    </div>
                </div>
            </div>

            <div>
                <h2>Your Monthly EMI is: &#36; {Math.round(emi)} </h2>
            </div>
        
        </div>
    )
}