import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ nombre, precio, img, stock }) => {



  return (
    <div className='contenedorItem'>
      <h2 className='ItemDetail'>{nombre} </h2>
      <h3 className='ItemDetail'>Precio:{precio} </h3>
      <p className='ItemDetail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis te.</p>
      <img src={img} alt={nombre} />
      {(<ItemCount inicial={1} stock={stock} />)}
    </div>
  )
}

export default ItemDetail

