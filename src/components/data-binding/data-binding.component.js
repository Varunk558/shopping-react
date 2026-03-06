
export function DataBindingComponent() {

    var Product = {
        Name : "Samsung TV",
        Price : 45000.44,
        Stock : true

    }
    // Array of categories
    var categories = ["All", "Electronics", "Footwear", "Fashion"];

    // Array of products
    var products = [
        { Name: "Samsung TV", Price: 45000.44, Stock: true },
        { Name: "Nike Shoes", Price: 5000.99, Stock: false },
        { Name: "Apple Watch", Price: 25000, Stock: true }
    ];

    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>
                <dd><input type="text" value={Product.Name} /></dd>
                <dt>Price</dt>
                <dd>{Product.Price}</dd>
                <dd>{(Product.Stock == true) ? "In Stock" : "Out of Stock"}</dd>
            </dl>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map(category =>
                        <option key={category}>{category}</option>
                    )
                }
            </select>

                <ul className="list-unstyled">
                    {
                        categories.map(category =>
                            <li key={category}><input type="checkbox" />{category}</li>
                        )
                    }
                </ul>

                <div>
                    {
                        categories.map(category =>
                            <div key={category}>
                                <button className="w-25">{category}</button>
                            </div>
                        )
                    }
                </div>

            <h2>Products Table</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th> 
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock == true) ? "In Stock" : "Out of Stock"}</td>
                                <td>
                                    <button className="btn btn-info"><span className="bi bi-eye"></span></button>
                                    <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
                                    <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}