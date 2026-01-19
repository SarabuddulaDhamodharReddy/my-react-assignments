import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
function CreateProducts() {
  let navigate=useNavigate()
    let {register,handleSubmit,formState:{errors}}=useForm()
    const handleCreateProducts=async function(newProduct){
      let res=await fetch('http://localhost:3000/products',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newProduct)
      })
      if(res.status===201){
        navigate('/product');
      }
    }
  return (
    <div className='min-vh-100'>
      <p className="display-3 text-center text-info fw-semibold">Product Entry</p>
      <form className='mx-auto w-50 my-5' onSubmit={handleSubmit(handleCreateProducts)}>
        <label className="form-label">Enter Product Name</label>
        <input type="text" {...register("productName",{required:true,minLength:3})} className="form-control mb-3" placeholder='Name...' />
        {errors?.productName?.type==='required'&&<p className='text-danger'>Product Name is required🔝</p>}
        {errors?.productName?.type==='minLength'&&<p className='text-danger'>Minimum number of charecters are 3</p>}
        <label className='form-label'>Enter Product Price</label>
        <input type="number" {...register("productPrice",{required:true,min:0})} className='form-control mb-3' placeholder='Price...'/>
        {errors?.productPrice?.type==='required'&&<p className='text-danger'>Product Price is required🔝</p>}
        {errors?.productPrice?.type==='min'&&<p className='text-denger'>Minimum Price must be Entered</p>}
        <textarea {...register("description",{required:true})} className="form-control" placeholder="Description about your product..."/>
        {errors?.description?.type==='required'&&<p className='text-danger'>Description about the product is required🔝</p>}
        <label className="form-label">Enter Date of Manufacture</label>
        <input type="date" {...register("dateOfManufacture",{required:true})} className="form-control mb-3" />
        {errors?.dateOfManufacture?.type==='required'&&<p className='text-danger'>Date is required🔝</p>}
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  )
}

export default CreateProducts
