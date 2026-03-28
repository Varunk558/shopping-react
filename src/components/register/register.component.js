import React from "react";

export class RegisterComponent extends React.Component {

    constructor(){
        super();
        this.state ={
            title: 'Product Details',
            product: {
                Name: "TV",
                Price: "45000.56",
                Stock: true
            },
            categories: ["All","Footwear", "Electronics", "Fashion"],
            effect: 'text-success'
        }
    }

    handleCategoryChange(e){
        alert(e.target.value);
    }
    

    render(){
        return(

            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt className={this.state.effect}>Name</dt>
                    <dd>{this.state.product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.product.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.product.Stock == true)?"Available":"Out Of Stock"}</dd>
                </dl>
                <h3>Select Category</h3>
                <select onChange={this.handleCategoryChange}>
                    {
                        this.state.categories.map(category =>
                            <option key={category}>{category}</option>
                        )
                    }
                </select>
            </div>

        )
    }
}