import './Product.css'
function Product(probs){

    return(
        <div className='card'>
            <p><b>Id: </b>{probs.data.id}</p>
            <p><b>Title: </b>{probs.data.title}</p>
            <p><b>Price: </b>{probs.data.price}</p>
            <p><b>Description: </b>{probs.data.description}</p>
            <p><b>Category: </b>{probs.data.category}</p>
            <img src={probs.data.image}/>
            <p><b>Rating: </b><br />rate: {probs.data.rating.rate} <br /> count: {probs.data.rating.count}</p>
        </div>
    )
}
export default Product;