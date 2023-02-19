import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "../components/form/selectField";
import TextAreaField from "../components/form/textAreaField";
import TextField from "../components/form/textField";
import Loader from "../components/loader";
import { validator } from "../utils/validator";
import { getCategories } from "../store/categories";
import { getCompanies } from "../store/companies";
import {
    createProduct,
    // getProductById,
    getProducts,
    getProductsLoadingStatus,
    removeProduct,
    updateProduct
} from "../store/products";
import { getSubcategories } from "../store/subcategories";

const initialData = {
    amount: "",
    categoryId: "",
    subcategoryId: "",
    companyId: "",
    image: "",
    name: "",
    price: "",
    description: ""
};

const Admin = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const defaultImgURL =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAG1BMVEX////p6enu7+77+/v09PTr6+vx8fH4+Pj19fVCfWJIAAACHElEQVR4nO3a246DIBSF4Qps9P2feLQWRUU0nWR0Of+XXlkvWNnISV8vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqiq4hXt+570ZoK001WzdUnu7p93wr1XE0Trm7hlw4KJluyw4KpluywYKIlO1EwnZLl81ZfsKNRsf9pzGvxTJH23TeZ+10wd3X7d+XBTgwd69s0gj22Ys8KdrL/ldmNg51+tAqxbl2x/Xa70PpeG2r3XN3+XctGz8Vb7ryyXdqyvkLB7N3yzcT7nshtszQRCWafn7XbG1ub/tYLlvL50p2+NMhoBLNarjmZ5sqj3A9HY28UrNiosmDfbgWEgmU7ZB+cmQtZz9w8ZkLB5g1ySM9Udkk32DxyuELzNyOjULD0x6I4U81Eg9kcwVuWwaY6Bs0Jum9zGuu7ZWW6z+VWM1jPl6+nAF6zK/bVSMFWD1N69LzmIjir2G4wzYo9uCumwWM1FafBshXtijavFBcBptktigZ76gQ9qC+p1ncLBZt3LYVF8GbfIhQsf7HXDduWLrugvG2pHe5uj41lgg2nULWjgfXZgEyw96HH/mGObsXGbE87fhu74nDeWzowHc+IhbviwRG3bLCxaI3FrD/6aE2hXGLBpnwudq33bRfd/is0wWDnEOzPEYxgN/HYYGF3JD/DbvyNX/Vz9CP3/fgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+O9+AC4xDz003GcNAAAAAElFTkSuQmCC";

    const products = useSelector(getProducts());
    const productsLoading = useSelector(getProductsLoadingStatus());

    const companies = useSelector(getCompanies());
    // const companiesLoading = useSelector(getCompaniesLoadingStatus());
    const companiesList = companies?.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const categories = useSelector(getCategories());
    const categoriesList = categories?.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const subcategories = useSelector(getSubcategories());
    const subcategoriesList = subcategories?.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const category = (catId) => {
        // console.log(categories.find((c) => c._id === catId));
        return categories.find((c) => c._id === catId);
    };

    const subcategory = (subcatId) => {
        // console.log(subcategories?.find((c) => c._id === subcatId));
        return subcategories.find((c) => c._id === subcatId);
    };

    const company = (compId) => {
        // console.log(companies.find((c) => c._id === compId));
        return companies?.find((c) => c._id === compId);
    };

    const [errors, setErrors] = useState({});
    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };

    const getEditableProduct = (id) => {
        const foundProduct = products.find((p) => p._id === id);
        return foundProduct;
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id));
    };
    const handleEditProduct = (id) => {
        const editableProduct = getEditableProduct(id);
        localStorage.setItem("productId", id);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
        setData(editableProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productId = localStorage.getItem("productId");
        const isValid = validate();
        if (!isValid) return;
        productId
            ? dispatch(
                  updateProduct({
                      ...data,
                      amount: Number(data.amount),
                      price: Number(data.price),
                      image: data.image || defaultImgURL
                  })
              )
            : dispatch(
                  createProduct({
                      ...data,
                      amount: Number(data.amount),
                      price: Number(data.price),
                      image: data.image || defaultImgURL
                  })
              );
        clearForm();
    };

    // function getQualitiesListByIds(qualitiesIds) {
    //     const qualitiesArray = [];
    //     for (const qualId of qualitiesIds) {
    //         for (const quality of qualities) {
    //             if (quality._id === qualId) {
    //                 qualitiesArray.push(quality);
    //                 break;
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // }
    // const transformData = (data) => {
    //     const result = getQualitiesListByIds(data).map((qual) => ({
    //         label: qual.name,
    //         value: qual._id
    //     }));
    //     return result;
    // };
    // useEffect(() => {
    //     if (!professionLoading && !qualitiesLoading && currentUser && !data) {
    //         setData({
    //             ...currentUser,
    //             qualities: transformData(currentUser.qualities)
    //         });
    //     }
    // }, [professionLoading, qualitiesLoading, currentUser, data]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Введите наименование товара"
            }
        },
        companyId: {
            isRequired: {
                message: "Необходимо выбрать производителя"
            }
        },
        categoryId: {
            isRequired: {
                message: "Необходимо выбрать категорию товара"
            }
        },
        subcategoryId: {
            isRequired: {
                message: "Необходимо выбрать подкатегорию товара"
            }
        },
        description: {
            isRequired: {
                message: "Описание товара не может быть пустым"
            }
        },
        amount: {
            isRequired: {
                message: "Количество не может быть пустым"
            },
            isNumber: {
                message: "Значение должно быть числом"
            }
        },
        price: {
            isRequired: {
                message: "Необходимо ввести цену товара"
            },
            isNotNullNumber: {
                message: "Введите число отличное от нуля"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return !isLoading ? (
        <div className="my-container">
            <div className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-column col-3">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Нименование"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            error={errors.name}
                        />
                        <SelectField
                            label="Производитель"
                            name="companyId"
                            defaultOption="Выберите производителя"
                            options={companiesList ?? []}
                            onChange={handleChange}
                            value={data.companyId}
                            error={errors.companyId}
                        />
                        <SelectField
                            label="Категория"
                            name="categoryId"
                            defaultOption="Выберите категорию"
                            options={categoriesList ?? []}
                            onChange={handleChange}
                            value={data.categoryId}
                            error={errors.categoryId}
                        />
                        <SelectField
                            label="Подкатегория"
                            name="subcategoryId"
                            defaultOption="Выберите подкатегорию"
                            options={subcategoriesList ?? []}
                            onChange={handleChange}
                            value={data.subcategoryId}
                            error={errors.subcategoryId}
                        />
                        <TextField
                            label="Ссылка на изображение инструмента"
                            name="image"
                            onChange={handleChange}
                            value={data.image}
                        />
                        <TextAreaField
                            value={data.description}
                            onChange={handleChange}
                            name="description"
                            label="Описание товара"
                            error={errors.description}
                        />
                        <TextField
                            label="Количество"
                            name="amount"
                            onChange={handleChange}
                            value={data.amount}
                            error={errors.amount}
                        />
                        <TextField
                            label="Цена (руб)"
                            name="price"
                            onChange={handleChange}
                            value={data.price}
                            error={errors.price}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-dark w-100 mx-auto"
                        >
                            Добавить / Сохранить изменения
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Наименование</th>
                                <th scope="col">Производитель</th>
                                <th scope="col">Категория</th>
                                <th scope="col">Подкатегория</th>
                                <th scope="col">Изображение</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Количество</th>
                                <th scope="col">Цена</th>
                            </tr>
                        </thead>
                        {products?.length > 0 && (
                            <tbody className="table-group-divider">
                                {!productsLoading ? (
                                    products.map((p, index) => (
                                        <tr key={p._id}>
                                            <th scope="row">
                                                {index + 1 ?? ""}
                                            </th>
                                            <td>{p.name}</td>
                                            <td className="td-company">
                                                {company(p.companyId)?.name ??
                                                    ""}
                                                {/* {p.companyId} */}
                                            </td>
                                            <td>
                                                {category(p.categoryId)?.name ??
                                                    ""}
                                                {/* {p.categoryId} */}
                                            </td>
                                            <td>
                                                {subcategory(p.subcategoryId)
                                                    ?.name ?? ""}
                                                {/* {p.subcategoryId} */}
                                            </td>
                                            <td className="td-img">
                                                {p.image}
                                            </td>
                                            <td className="td-description">
                                                {p.description}
                                            </td>
                                            <td>{p.amount}</td>
                                            <td className="td-price">
                                                {p.price} руб
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-success btn-sm"
                                                    onClick={() =>
                                                        handleEditProduct(p._id)
                                                    }
                                                >
                                                    <i className="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() =>
                                                        handleRemoveProduct(
                                                            p._id
                                                        )
                                                    }
                                                >
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <Loader />
                                )}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};
export default Admin;
