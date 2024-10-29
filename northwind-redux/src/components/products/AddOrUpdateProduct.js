import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    },
        // eslint-disable-next-line
        [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value,
        }));

        validate(name, value);

    }

    function validate(name, value) {
        // Can be done more if statements for other errors
        if (name === "productName" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "Ürün ismi olmalıdır.",
                unitPrice: "Fiyat Girilmeli",
                unitsInStock: "Stock Girilmeli",
                quantityPerUnit: "Sayısı verilmeli",
                category: "Kategori Seçilmeli"
            }));
        }
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product)
            .then(() => {
                history.push("/")
            });
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    );
}

export function getProductById(products, productId) {
    // eslint-disable-next-line eqeqeq
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length > 0
        ? getProductById(state.productListReducer, productId)
        : {};
    return {
        product,
        products: state.productListReducer,
        categories: state.categoriesListReducer,
    };
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
