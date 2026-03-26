import React, { useState } from "react";

export function SampleComponent() {

    const [gender, setGender] = useState("");
    const [selectedGender, setSelectedGender] = useState("");

    function MaleChange(e) {
        if(e.target.checked) {
            setGender(e.target.value);
        }
    }

    function FemaleChange(e) {
        if(e.target.checked) {
            setGender(e.target.value);
        }
    }

    function SelectGender() {
        setSelectedGender(gender);
    }

    return (
        <div className="container-fluid">
                <h2 className="text-center mt-4">Sample Component</h2>
                <h2>Radio</h2>
                <input type="radio"  onChange = {MaleChange} id="option1" name="gender" value="male" />Male

                <input type="radio"  onChange = {FemaleChange} id="option2" name="gender" value="female" />Female
                <br />
                <button onClick={SelectGender} className="btn btn-primary mt-4">Get Details</button>
                <p>Selected Gender: {selectedGender}</p>

                <h2>Slider</h2>
                <div className="progress">
                    <div className="progress-bar me-1 bg-dark" style={{width: "25%"}}>
                        Underweight
                    </div>
                    <div className="progress-bar me-1 bg-info" style={{width: "25%"}}>
                        Normalweight
                    </div>
                    <div className="progress-bar me-1 bg-warning" style={{width: "25%"}}>
                        Overweight
                    </div>
                    <div className="progress-bar me-1 bg-danger" style={{width: "25%"}}>
                        Obesity
                    </div>        
                </div>
                <div>
                    <span style={{marginLeft: "25%"}} className="bi bi-triangle-fill"></span>
                </div>
        </div>
    )
}