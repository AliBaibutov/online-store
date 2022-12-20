import React, { useState } from "react";
// import httpService from "./services/http.service";
// import { useRoutes } from "react-router";
// import routes from "./routes";
// import SideBar from "./components/sideBar";
// import API from "../api";
import { useSelector } from "react-redux";
import { getCategories } from "../store/categories";
import { getProducts } from "../store/products";
import { getSubcategories } from "../store/subcategories";

const Main = () => {
    const products = useSelector(getProducts());
    const subcategories = useSelector(getSubcategories());
    const categories = useSelector(getCategories());

    const [productsList, setProductsList] = useState(products);
    // const [subcategoriesList, setSubcategoriesList] = useState(subcategories);

    // const [isMouseOver, setIsMouseOver] = useState(false);

    // const toggleMenu = () => {
    //     setIsMouseOver((prevState) => !prevState);
    // };
    console.log(categories);
    console.log(subcategories);

    // const getSubcategoryName = (id) => {
    //     const subcategory = useSelector(getSubcategoriesById(id));
    //     console.log(subcategory);
    // };

    const filterSubcategories = (catId) => {
        return subcategories.filter((s) => catId === s.categoryId);
    };

    const filterProducts = (subcatId) => {
        const filteredProducts = products.filter(
            (p) => p.subcategoryId === subcatId
        );
        setProductsList(filteredProducts);
    };

    return (
        <div className="my-container h-100">
            <div className="d-flex">
                <div className="d-flex flex-column border-dark mb-2 ps-2 me-1 flex-wrap card col-3">
                    <h4>КАТЕГОРИИ</h4>
                    {categories.map((c) => (
                        <div key={c._id} className="mb-2 cursor dropend">
                            <div
                                className="text-wrap category-hover"
                                data-bs-toggle="dropdown"
                            >
                                {c.name}
                            </div>
                            <div className="dropdown-menu">
                                {filterSubcategories(c._id).map((s) => (
                                    <a
                                        className="dropdown-item category-hover bg-transparent text-wrap"
                                        onClick={() => filterProducts(s._id)}
                                        key={s._id}
                                    >
                                        {s.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"d-flex flex-wrap p-0 col-9 h-100"}>
                    {productsList.map((p) => (
                        <div
                            key={p._id}
                            className="d-flex justify-content-end card border-dark mb-2 mx-1"
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
                                <span>
                                    {filterSubcategories(p.subcategoryId)}
                                </span>
                                <div className="product-name-wrapper d-flex align-items-start">
                                    <h5 className="card-title">{p.name}</h5>
                                </div>
                                <div className="d-inline-block bg-light text-dark border rounded border-dark mb-3 px-1">
                                    <h4>{p.price} р.</h4>
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
    );
};

export default Main;

// <div className="dropdown">
//                        <button
//   className="btn btn-secondary dropdown-toggle"
//         type="button"
//         data-bs-toggle="dropdown"
//     >
//         Dropdown button
//     </button>
//     <ul className="dropdown-menu">
//         <li>
//             <a className="dropdown-item" href="#">
//                 Action
//             </a>
//         </li>
//         <li>
//             <a className="dropdown-item" href="#">
//                 Another action
//             </a>
//         </li>
//         <li>
//             <a className="dropdown-item" href="#">
//                 Something else here
//             </a>
//         </li>
//     </ul>
// </div>
