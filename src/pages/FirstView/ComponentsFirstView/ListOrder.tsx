import React, { useEffect, useState } from 'react';
import ItemOrder from './ItemOrder';
import './addOrder.css'
import postOrders from '../../../api_functions/postOrders';
import { Product } from '../../domain/Products';

interface ListOrderProps {
    products: Product[];
    total: number;
}
type TuplaProduct = [number, Product]

export default function ListOrder(props: ListOrderProps) {
    const { products, total } = props;
    const [client, setClient] = useState("")
    const [listProducts, setListProducts] = useState<Map<number, Product>>(new Map())

    useEffect(() => {
        const arrayProducts: TuplaProduct[] = products.map((product) => {
            return [product.id, product]
        })

        const mapProducts = new Map<number, Product>(arrayProducts)
        setListProducts(mapProducts)

    }, [products])

    useEffect(() => {
        const arrayValue = Array.from(listProducts.values())
        console.log(arrayValue, "nina")

    }, [Array.from(listProducts.values())])

    const onChangeItemOrder = (cantidad: number, id: number) => {
        if (listProducts.has(id)) {
            const product = listProducts.get(id) as Product
            product!.quantity = cantidad
            listProducts.set(id, product)
            setListProducts(listProducts)
        }
    }

    const Orders = products.map((product) => {
        const { name, price, id, } = product
        return (
            <ItemOrder productName={name} price={price} key={id} id={id} onChange={onChangeItemOrder} />

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
        </section>
    );
}

