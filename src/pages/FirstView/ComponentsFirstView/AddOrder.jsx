import React, { useState } from 'react';
import ItemOrder from './ItemOrder';
import './addOrder.css'
import { MenuButton } from "../../Components/Buttons"
import postOrders from '../../../api_functions/postOrders';

export default function AddOrder({ items, total }) {
    const [client, setClient] = useState("")
    const [listOrder, setListOrder] = useState([])

    const Orders = items.map((item) => {
        return (
            <ItemOrder productName={item.name} price={item.price} key={item.id} id={item.id} onChange={(cantidad, id) => { console.log(cantidad, id) }} />

        )
    })

    return (
        <section className='container-add-order'>
            <div className='header-add-order'>
                <span> CLIENTE:</span>
                <input type="text" value={client} onChange={(event) => setClient(event.target.value)} />
                <br />
            </div>
            <div className='title-order'>
                <span className='style-order order-product-name '> ITEM</span>
                <span className='style-order'> CANT</span>
                <span className='style-order'> PRECIO</span>
            </div>

            <div className='container-tabler'>
                {Orders}
            </div>
            <div>
                <span>TOTAL</span>
                <span>S/.{total}</span>
            </div>
            <MenuButton title='Enviar a la cocina' whenClick={() => { postOrders(listOrder) }} />
        </section>
    );
}

