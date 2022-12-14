import React, { useEffect, useState } from "react";
// import httpService from "./services/http.service";
// import { useRoutes } from "react-router";
// import routes from "./routes";
// import SideBar from "./components/sideBar";
import API from "../api";

const Main = () => {
    const [products, setProducts] = useState([]);
    // const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        API.products.fetchAll().then((data) => {
            setProducts(data);
        });
        // API.categories.fetchAll().then((data) => {
        //     setCategories(data);
        // });
        API.subcategories.fetchAll().then((data) => {
            setSubcategories(data);
        });
    }, []);

    const getSubcategoryById = (subcategoryId) => {
        return subcategories.filter((c) => c._id === subcategoryId);
    };
    return (
        products.length && (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-2 text-light bg-dark text-light">
                            <ul className="nav flex-column me-4">
                                <li className="nav-item">Категории</li>
                                <li className="nav-item">Link</li>
                                <li className="nav-item">Link</li>
                                <li className="nav-item">Disabled</li>
                            </ul>
                        </div>
                        <div className="d-flex flex-wrap col-10">
                            {products.map((p) => (
                                <div
                                    key={p._id}
                                    className="d-flex justify-content-end card border-dark m-1"
                                    style={{ width: "18rem" }}
                                >
                                    <div className="img-wrapper d-flex flex-column justify-content-center">
                                        <img
                                            src={p.image}
                                            className="mx-auto"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="pt-3 px-3">
                                        {getSubcategoryById(
                                            p.subcategoryId
                                        ).map((c) => (
                                            <span key={c._id}>{c.name}</span>
                                        ))}
                                        <div className="product-name-wrapper d-flex align-items-start">
                                            <h5 className="card-title">
                                                {p.name}
                                            </h5>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark mb-3 rounded-0">
                                        В КОРЗИНУ
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Main;
