import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import FormAddProduct from "./views/FormAddProduct";
import FormEditPage from "./views/FormEditPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/addProduct" element={<FormAddProduct />} />
                <Route path="/editProduct/:id" element={<FormEditPage />} />
            </Routes>
        </div>
    );
}

export default App;
