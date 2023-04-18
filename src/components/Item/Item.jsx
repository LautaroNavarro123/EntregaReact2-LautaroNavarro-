import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <p className='white'> {nombre} </p>
        <p className='white'>Valor:{precio} </p>
        <img className='imgProducto' src={img} alt={nombre} />
        <Link to={`/item/${id}`}><button className='btnProducto' >Mas detalles</button></Link>
    </div>
  )
}

export default Item