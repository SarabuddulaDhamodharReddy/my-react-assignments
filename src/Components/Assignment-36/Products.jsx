import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"

function Products() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [products, setProducts] = useState([])
  const handleReadProducts = async function () {
    let res = await fetch('http://localhost:3000/products')
    let allproducts = await res.json()
    setProducts(allproducts)
  }
  const [selectedProduct,setSelectedProduct]=useState(null)
  const handleOpenProduct=function(newProduct){
    setSelectedProduct(newProduct)
    handleShow()
  }
  useEffect(
    () => { handleReadProducts() }
    , [])
  return (
    <div  >
    <p className="display-3 text-center text-dark fw-bold mb-5">Products</p>
    <div className='min-vh-100 row'>
      
      {
        products.map(newProduct => <div className="col-md-3 mx-auto" key={newProduct.id}>
          <button onClick={()=>handleOpenProduct(newProduct)} className="btn btn-info btn-lg w-100 py-3">{newProduct.productName}</button>
          </div>)
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className="display-5 fw-semibold text-center text-dark">{selectedProduct?.productName}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="">{selectedProduct?.description}</p>
            <p><b>Product Price: </b>{selectedProduct?.productPrice}</p>
            <p><b>Date Of Manufacture: </b>{selectedProduct?.dateOfManufacture}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success">Buy Now</button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Products
