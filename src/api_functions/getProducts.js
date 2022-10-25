const BASE_URL = "http://localhost:3002";
const menuPath = '/menu';
const token = localStorage.getItem("token");

const getProducts = async () => {
    const res = await fetch(`${BASE_URL}${menuPath}`, {
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