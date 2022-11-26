
import React, { useState, useEffect } from 'react'
import './firstView.css'
import CardItems from './ComponentsFirstView/CardItems'
import NavHeader from '../Components/NavHeader'
import getProducts from '../../api_functions/getProducts';
import { Button } from '../Components/Button';
import ListOrder from './ComponentsFirstView/AddOrder';
import { Product } from '../domain/Products';


function FirstView() {

    const [type, setType] = useState("breakfast");
    // menu primero vale breakfast es el tipo de {producto}

    const [products, setProducts] = useState<Product[]>([]);
    const [orderProducts, setOrderProducts] = useState<Product[]>([])
    const [bg1, setBg2] = useState("")
    // const [table, setTable] = useState("");

    useEffect(() => {
        async function getServices() {
            const productsData = await getProducts(setProducts)
        }
        getServices();
    }, [])

    const filterProducts = products.filter((product) => product.type === type);

    const onAddButtonClick = (product: Product) => {
        if (!orderProducts.find((item) => {
            return item.id == product.id
        })) {
            setOrderProducts([...orderProducts, product])
        }
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
                                    <Button title="Desayuno" onClick={() => {
                                        setType("breakfast")
                                        setBg2("active")
                                    }} />
                                    <Button title="Almuerzo y cena" onClick={() => {
                                        setType("lunch")
                                        setBg2("active")
                                    }} />
                                </div>
                                <div className='fondo-items Table-items'>
                                    {filterProducts.map(({ id, img, name, price }) => <CardItems img={img} name={name} price={price} id={id} key={id} onAddButtonClick={onAddButtonClick} />)}

                                </div>
                            </div>
                            <div className='item2'>
                                {orderProducts.length === 0 ? <div>Todavia no tienen hambre</div> : <ListOrder items={orderProducts} total={0} />}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstView;
