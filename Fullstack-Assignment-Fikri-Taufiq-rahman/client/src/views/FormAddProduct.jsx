import { CForm, CFormInput, CFormSelect, CButton } from "@coreui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../store/actions/actionProduct";
import Sidebar from "../components/Sidebar";

export default function FormAddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        code: "",
        name: "",
        description: "",
        price: 0,
        UOM: "",
    });
    
    const input = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const addProduct = () => {
        dispatch(
            addNewProduct({
                code: product.code,
                name: product.name,
                description: product.description,
                price: product.price,
                UOM: product.UOM,
            })
        );
        navigate("/");
    };

    return (
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
            <Sidebar />
            <CForm className="flex flex-col justify-center items-center w-[84%] px-96" onSubmit={() => addProduct()}>
                <p className="text-2xl">Add Page</p>
                <CFormInput
                    onChange={input}
                    value={product.code}
                    name="code"
                    type="text"
                    label="Code"
                    placeholder="Code"
                />
                <CFormInput
                    onChange={input}
                    value={product.name}
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Name"
                />
                <CFormInput
                    onChange={input}
                    value={product.description}
                    name="description"
                    type="text"
                    label="Description"
                    placeholder="Description"
                />
                <CFormInput
                    onChange={input}
                    value={product.price}
                    name="price"
                    type="number"
                    label="Price"
                    placeholder="10000"
                />
                <CFormSelect label="UOM" name="UOM" onChange={input}>
                    <option disabled selected>
                        Open this select menu
                    </option>
                    <option value="pcs">PCS</option>
                    <option value="sheet">SHEET</option>
                    <option value="roll">ROLL</option>
                </CFormSelect>
                <CButton color="info" className="mt-2" type="submit">
                    Submit
                </CButton>
            </CForm>
        </div>
    );
}
