import React from "react";
import PropTypes from "prop-types";
import Loader from "../common/loader";

const AdminTable = ({
    products,
    productsLoading,
    company,
    category,
    subcategory,
    handleEditProduct,
    handleRemoveProduct
}) => {
    return (
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
                                <th scope="row">{index + 1 ?? ""}</th>
                                <td>{p.name}</td>
                                <td className="td-company">
                                    {company(p.companyId)?.name ?? ""}
                                </td>
                                <td>{category(p.categoryId)?.name ?? ""}</td>
                                <td>
                                    {subcategory(p.subcategoryId)?.name ?? ""}
                                </td>
                                <td className="td-img">{p.image}</td>
                                <td className="td-description">
                                    {p.description}
                                </td>
                                <td>{p.amount}</td>
                                <td className="td-price">{p.price} руб</td>
                                <td>
                                    <button
                                        className="btn btn-outline-success btn-sm"
                                        onClick={() => handleEditProduct(p._id)}
                                    >
                                        <i className="bi bi-pencil-fill"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() =>
                                            handleRemoveProduct(p._id)
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
    );
};

AdminTable.propTypes = {
    products: PropTypes.array,
    productsLoading: PropTypes.bool,
    company: PropTypes.func,
    category: PropTypes.func,
    subcategory: PropTypes.func,
    handleEditProduct: PropTypes.func,
    handleRemoveProduct: PropTypes.func
};

export default AdminTable;
