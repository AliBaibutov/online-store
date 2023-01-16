import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectField from "../components/form/selectField";
import TextAreaField from "../components/form/textAreaField";
import TextField from "../components/form/textField";
import { getCategories } from "../store/categories";
import { getCompanies } from "../store/companies";
import { getSubcategories } from "../store/subcategories";

const Admin = () => {
    // const dispatch = useDispatch();
    const [data, setData] = useState({});

    const [isLoading, setIsLoading] = useState();

    const companies = useSelector(getCompanies());
    // const companiesLoading = useSelector(getCompaniesLoadingStatus());
    const companiesList = companies.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const categories = useSelector(getCategories());
    const categoriesList = categories.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const subcategories = useSelector(getSubcategories());
    const subcategoriesList = subcategories.map((c) => ({
        label: c.name,
        value: c._id
    }));
    // const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // const isValid = validate();
        // if (!isValid) return;
        // dispatch(
        //     updateUser({
        //         ...data,
        //         qualities: data.qualities.map((q) => q.value)
        //     })
        // );
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
        console.log(data);
    };
    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };
    // const isValid = Object.keys(errors).length === 0;
    return (
        data && (
            <div className="my-container">
                <div className="d-flex flex-column col-3">
                    {!isLoading && companiesList.length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Название модели"
                                name="name"
                                onChange={handleChange}
                            />
                            <TextField
                                label="Количество"
                                name="amount"
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выберите производителя"
                                name="company"
                                defaultOption="Choose..."
                                options={companiesList}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Ссылка на изображение инструмента"
                                name="image"
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выберите категорию"
                                name="category"
                                defaultOption="Choose..."
                                options={categoriesList}
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выберите подкатегорию"
                                name="subcategory"
                                defaultOption="Choose..."
                                options={subcategoriesList}
                                onChange={handleChange}
                            />
                            <TextAreaField
                                value={data.description || ""}
                                onChange={handleChange}
                                name="description"
                                label="Описание товара"
                                // error={errors.content}
                            />
                            <button
                                type="submit"
                                // disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        )
    );
};
export default Admin;
