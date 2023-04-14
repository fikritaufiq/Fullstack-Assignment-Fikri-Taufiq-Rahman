import {
    PRODUCT_FETCHDATA,
    PRODUCT_ADD,
} from "./actionType";
const url = "http://localhost:3000";

export const fetchData = (payload) => {
    return {
        type: PRODUCT_FETCHDATA,
        payload,
    };
};

export const addProduct = (payload) => {
    return {
        type: PRODUCT_ADD,
        payload,
    };
};

export const fetchAllData = () => {
    return (dispatch) => {
        fetch(`${url}/products`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => dispatch(fetchData(data)))
            .catch((error) => console.log(error));
    };
};

export const addNewProduct = (payload) => {
    return (dispatch) => {
        fetch(`${url}/addNewProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload) 
        })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data) => dispatch(addProduct(data)))
        .catch((error) => {
            console.log(error)
        })
    }
}

export const editProduct = (id, payload) => {
    return () => {
        fetch(`${url}/updateProduct/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(payload)
        })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        fetch(`${url}/deleteProduct/${id}`, {
            method: "DELETE"
        })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            dispatch(fetchAllData())
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
