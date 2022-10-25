
import React, { useState, useEffect } from 'react'
import './firstView.css'
import CardItems from './ComponentsFirstView/CardItems'
import NavHeader from '../Components/NavHeader'
import AddRemove from './ComponentsFirstView/AddRemove';
import getProducts from '../../api_functions/getProducts';
import { MenuButton } from '../Components/Buttons';

interface Products {
    "id": number,
    "name": string,
    "img": string,
    "price": number,
    "type": string
}

function FirstView() {

    const [menu, setMenu] = useState("breakfast");
    // menu primero vale breakfast y setMenu se actualiza al dar click xej: hamburguer

    const [products, setProducts] = useState<Products[]>([]);
    const [bg1, setBg2] = useState("")
    const [bg3, setBg3] = useState("")
    const [client, setBreackfast] = useState("");
    const [table, setTable] = useState("");

    useEffect(() => {
        async function getServices() {
            const productsData = await getProducts()
            setProducts(productsData);
        }
        getServices();
    }, [])

    //     const filteredProducts = (typeMenu: string) => {  // typeMenu es un string xej 'dinner'
    //         const typeProducts = products.filter((prod) => { //product es el [{},{},...] de productos de la data
    //             return prod.type === typeMenu
    //         })

    //         const Cards = typeProducts.map(({ id, img, name, price, type }=> { // este es el objProd unico filtrado x tipo
    //         //typeProducts es el array de obj
    //         return (<CardItems
    //             img={img}
    //             name={name}
    //             price={price}
    //             key={id}
    //         />)
    //     })
    //     return Cards;

    // }

    return (
        <div className="FirstView">
            <NavHeader />
            <main>
                <div className="wallpaper ">
                    <div className="wrap-container">
                        <div className="container-menu">
                            <div className='items'>
                                <div className='square-btn'>
                                    <MenuButton title="Desayuno" bg={bg1} whenClick={() => {
                                        setMenu("breakfast")
                                        setBg2("active")
                                        setBg3("")
                                    }} />
                                    <button className="Menu-btn"> Almuerzo y Cena </button>
                                </div>
                                <div className='fondo-items'>
                                    {products.map(({ id, img, name, price, type }) => <CardItems img={img} name={name} price={price} key={id} />)}
                                </div>
                            </div>
                            <div className='items'>
                                <section>
                                    <div>
                                        <span> CLIENTE:</span>
                                        <span> nombre del cliente</span>
                                        <br />
                                        <AddRemove />
                                        <AddRemove />
                                    </div>
                                    <div>
                                        <span> ITEM</span>
                                        <span> CANT</span>
                                        <span> PRECIO</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstView;
