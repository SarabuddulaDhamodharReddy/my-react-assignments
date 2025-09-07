import './Product.css'
import { useState } from 'react'
export default function Product(){
    
    let pro={
        pid:100,
        name:"TV",
        mrp:500000
    }
    let [Product,setMrp]=useState(pro)
    function changemrp(discount){
        let mrpAfterDiscount=pro.mrp-(pro.mrp*(discount/100));
        setMrp({...Product,mrp:mrpAfterDiscount})
    }
    
    return(
        <div className='Product'>
            <p><b>Product Id: </b>{Product.pid}</p>
            <p><b>Product Name: </b>{Product.name}</p>
            <p><b>Product Price: </b>{Product.mrp}</p>
            <button onClick={()=>changemrp(15)}>15% Discount</button>
            <button onClick={()=>changemrp(25)}>25% Discount</button>
            <button onClick={()=>changemrp(50)}>50% Discount</button>
        </div>
    )
}