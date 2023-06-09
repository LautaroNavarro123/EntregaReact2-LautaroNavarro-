import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({ inicial, stock}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <>
            <div className='Count'>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <button className='btnCarrito'>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
