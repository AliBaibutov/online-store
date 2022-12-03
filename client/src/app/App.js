import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import httpService from "./services/http.service";

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const productsEndpoint = "/products";
    console.log(nanoid());
    console.log(nanoid());
    console.log(nanoid());
    console.log(nanoid());
    console.log(nanoid());
    const getProducts = async () => {
        try {
            const { data } = await httpService.get(productsEndpoint);
            const { content } = data;
            setProducts(content);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div className="d-flex flex-row bd-highlight mb-3">
                {products.map(
                    (p) =>
                        p._id && (
                            <div key={p._id} className="p-2 bd-highlight">
                                <img
                                    src={p.image}
                                    className="mx-auto d-block"
                                    height="200"
                                />
                                <div className="text-left">{p.name}</div>
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default App;
