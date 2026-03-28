import { TemplateDemoComponent } from "../template-demo/template-demo.component";
import { useState } from "react";


export function ConditionalRenderingComponent() {

    const [orientation, setOrientation] = useState("horizontal");

    function SelectLayout(event) {
        if (event.target.value == "horizontal") {
            setOrientation("horizontal");
        } else {
            setOrientation("vertical");
        }
    }

    return (
        <div className="container-fluid">
            <h2>Conditional Rendering </h2>
            <select className="mb-2"  onChange={SelectLayout}>
                <option value="-1">Select Layout</option>
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
            </select>
            <TemplateDemoComponent layout={orientation} />
        </div>
    )
}