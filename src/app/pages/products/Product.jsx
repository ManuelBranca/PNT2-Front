"use client";

import Link from "next/link";
/*
MODIFICAR EN CASO DE SER NECESARIO
*/
function Product(props) {
    return (
        <li>
            <div>
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>{props.name}</h1>
                    <img src={props.image} alt={props.name} style={{ borderRadius: '15px' }} />
                    <p>{props.description}</p>
                    <p><strong>Precio:</strong> ${props.price}</p>
                </div>
                <div>
                    <Link href={`/products/description/${props._id}`} style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                        Detalle
                    </Link>
                </div>
            </div>
        </li>
    );
}

export default Product;
