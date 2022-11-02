
import React, { useState, useEffect } from 'react'
import './firstView.css'
import CardItems from './ComponentsFirstView/CardItems'
import NavHeader from '../Components/NavHeader'
import getProducts from '../../api_functions/getProducts';
import { MenuButton } from '../Components/Buttons';
import AddOrder from './ComponentsFirstView/AddOrder';


function FirstView() {

    const [type, setType] = useState("breakfast");
    // menu primero vale breakfast es el tipo de {producto}

    const [products, setProducts] = useState([]);
    const [bg1, setBg2] = useState("")
    // const [table, setTable] = useState("");

    useEffect(() => {
        async function getServices() {
            const productsData = await getProducts(setProducts)
        }
        getServices();
    }, [])

    const filterProducts = products.filter((product) => product.type === type);

    const addProducts = (product) => {

    }

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
                                        setType("breakfast")
                                        setBg2("active")
                                    }} />
                                    <MenuButton title="Almuerzo y cena" bg={bg1} whenClick={() => {
                                        setType("lunch")
                                        setBg2("active")
                                    }} />
                                </div>
                                <div className='fondo-items Table-items'>
                                    {filterProducts.map(({ id, img, name, price }) => <CardItems img={img} name={name} price={`S/.${price}`} key={id} />)}

                                </div>
                            </div>
                            <div className='item2'>
                                <AddOrder items={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstView;
