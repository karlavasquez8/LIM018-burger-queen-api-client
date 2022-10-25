const BASE_URL = "http://localhost:3001";
const productsPath = '/products';
const token = localStorage.getItem("token");
console.log(token);

const getProducts = async () => {
    const res = await fetch(`${BASE_URL}${productsPath}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }
    });
    /* console.log(res, 'respuesta de la petición'); */

    return res.json();
}

export default getProducts;