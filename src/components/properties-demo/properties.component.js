import { GridComponent } from "../grid/grid.component";
import { useState } from "react";


export function PropertiesDemoComponent() {

    const [employeeData, setEmployeeData] = useState([
        {"ID": 1, "First Name": "John", "Last Name": "Doe", "Designation": "Developer", "Salary": 60000},
        {"ID": 2, "First Name": "Jane", "Last Name": "Smith", "Designation": "Designer", "Salary": 55000},
        {"ID": 3, "First Name": "Bob", "Last Name": "Johnson", "Designation": "Manager", "Salary": 75000}
    ]);

    const [productData, setProductData] = useState([
        {"ID": 1, "Name": "Laptop", "Price": 1000, "Category": "Electronics"},
        {"ID": 2, "Name": "Smartphone", "Price": 500, "Category": "Electronics"},
        {"ID": 3, "Name": "Table", "Price": 200, "Category": "Furniture"}
    ]);


    return (
        <div className="container-fluid">
            <h2>Properties Demo Component</h2>
            <GridComponent theme="yellow" caption="Employee Data"  fields={["ID", "First Name", "Last Name", "Designation", "Salary"]} data={employeeData} /> 
            <hr />
            <GridComponent theme="green" caption="Product Data"  fields={["ID", "Name", "Price", "Category"]} data={productData} />  
        </div>
    )
}