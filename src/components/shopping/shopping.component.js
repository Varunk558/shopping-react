import { useEffect, useState } from "react";
import axios from "axios";
import "./shopping.component.css";

export function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        LoadCategories();
        LoadProducts(category);
    }, []);

    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                response.data.unshift("all");
                setCategories(response.data);
            })
    }

    function LoadProducts(category) {
        let url = "https://fakestoreapi.com/products";
        if (category && category !== "all") {
            url += `/category/${category}`;
        }
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
    }

    function handleCategoryChanged(event) {
        LoadProducts(event.target.value);
        setCategory(event.target.value);
    }

    return (
        <div className="container-fluid">
            <header className="bg-dark text-white text-center p-2">
                <h1><span className="bi bi-cart"></span> Shopper.</h1>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <select onChange={handleCategoryChanged} className="form-select">
                            {
                                categories.map(category =>
                                    <option key={category} value={category}>
                                        {category.toUpperCase()}
                                    </option>
                                )
                            }

                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="form-label">Choose Category</label>
                        <div>
                            <ul>
                                {
                                    categories.map(cat =>
                                        <li key={cat} className="list-group-item">
                                            <input type="radio" name="category" value={cat} checked={category === cat} onChange={handleCategoryChanged} />
                                            {cat.toUpperCase()}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                    </div>

                </nav>
                <main className="col-8 d-flex flex-wrap">
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2" >
                                <img src={product.image} className="card-img-top" height= "150" />
                                <div className="card-header">
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price:</dt>
                                        <dd>${product.price}</dd>
                                        <dt>Rating:</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} [{product.rating.count}]
                                        </dd>
                                    </dl>
                                </div>

                                <div className="card-footer">
                                    <button className="btn btn-danger"> 
                                        <span className="bi bi-cart-plus"></span> Add to Cart
                                    </button>

                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}