import React, { useState } from 'react';
import AddRemove from './AddRemove';
import trash from '../../../img/trash.png';
import './addOrder.css'

export default function AddOrder({ items, total }) {
    const [client, setClient] = useState("")

    const Orders = items.map((item) => {
        return (
            <AddRemove productName={item.name} price={item.price} key={item.id} />

        )
    })

    return (
        <section className='container-add-order'>
            <div className='header-add-order'>
                <span> CLIENTE:</span>
                <input type="text" value={client} onChange={(event) => setClient(event.target.value)} />
                <br />
                <div className='Orders'>
                    <span> ITEM</span>
                    <span> CANT</span>
                    <span> PRECIO</span>
                </div>
            </div>

            <div className='container-tabler'>
                {Orders}
            </div>
            <div>
                <span>TOTAL</span>
                <span>s./{total}</span>
            </div>


        </section>
    );
}

