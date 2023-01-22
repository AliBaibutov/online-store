import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "../components/form/selectField";
import TextAreaField from "../components/form/textAreaField";
import TextField from "../components/form/textField";
import { getCategories } from "../store/categories";
import { getCompanies } from "../store/companies";
import {
    createProduct,
    getProducts
    // getProductsLoadingStatus,
    // loadProductsList
    // loadProductsList
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

    // dispatch(loadProductsList());

    const [isLoading, setIsLoading] = useState(true);

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

    const products = useSelector(getProducts());
    // const productsLoading = useSelector(getProductsLoadingStatus());

    const category = (catId) => {
        console.log(categories.find((c) => c._id === catId));
        return categories.find((c) => c._id === catId);
    };

    const subcategory = (subcatId) => {
        console.log(subcategories?.find((c) => c._id === subcatId));
        return subcategories?.find((c) => c._id === subcatId);
    };

    const company = (compId) => {
        console.log(companies.find((c) => c._id === compId));
        return companies.find((c) => c._id === compId);
    };
    console.log(products);
    const [data, setData] = useState(initialData);
    // const [errors, setErrors] = useState({});
    const clearForm = () => {
        setData(initialData);
        // setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // const isValid = validate();
        // if (!isValid) return;
        dispatch(
            createProduct({
                ...data,
                amount: Number(data.amount),
                price: Number(data.price)
            })
        );
        console.log(products);
        // dispatch(loadProductsList());
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

    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта обязательна для заполнения"
    //         },
    //         isEmail: {
    //             message: "Email введен некорректно"
    //         }
    //     },
    //     name: {
    //         isRequired: {
    //             message: "Введите ваше имя"
    //         }
    //     }
    // };
    // useEffect(() => {
    //     validate();
    // }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };
    // const isValid = Object.keys(errors).length === 0;
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
                        />
                        <SelectField
                            label="Производитель"
                            name="companyId"
                            defaultOption="Выберите производителя"
                            options={companiesList ?? []}
                            onChange={handleChange}
                            value={data.companyId}
                        />
                        <SelectField
                            label="Категория"
                            name="categoryId"
                            defaultOption="Выберите категорию"
                            options={categoriesList ?? []}
                            onChange={handleChange}
                            value={data.categoryId}
                        />
                        <SelectField
                            label="Подкатегория"
                            name="subcategoryId"
                            defaultOption="Выберите подкатегорию"
                            options={subcategoriesList ?? []}
                            onChange={handleChange}
                            value={data.subcategoryId}
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
                            // error={errors.content}
                        />
                        <TextField
                            label="Количество"
                            name="amount"
                            onChange={handleChange}
                            value={data.amount}
                        />
                        <TextField
                            label="Цена (руб)"
                            name="price"
                            onChange={handleChange}
                            value={data.price}
                        />
                        <button
                            type="submit"
                            // disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Обновить
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
                        <tbody className="table-group-divider">
                            {products.map((p, index) => (
                                <tr key={p._id}>
                                    <th scope="row">{index + 1 ?? ""}</th>
                                    <td>{p.name}</td>
                                    <td>
                                        {company(p.companyId).name ?? ""}
                                        {/* {p.companyId} */}
                                    </td>
                                    <td>
                                        {category(p.categoryId).name ?? ""}
                                        {/* {p.categoryId} */}
                                    </td>
                                    <td>
                                        {subcategory(p.subcategoryId).name ??
                                            ""}
                                        {/* {p.subcategoryId} */}
                                    </td>
                                    <td>{p.image}</td>
                                    <td>{p.description}</td>
                                    <td>{p.amount}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) : (
        "Loading..."
    );
};
export default Admin;
