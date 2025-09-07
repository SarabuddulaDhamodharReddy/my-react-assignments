import { useForm } from 'react-hook-form'

function CreateProducts() {
    let {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div className='min-vh-100'>
      <p className="display-3 text-center text-info fw-semibold">Product Entry</p>
      <form className='mx-auto w-50 my-5' onSubmit={handleSubmit()}>
        <label className="form-label">Enter Product Name</label>
        <input type="text" {...register("productName",{required:true,minLength:3})} className="form-control mb-3" placeholder='Name...' />
        {errors?.productName?.type==='required'&&<p className='text-danger'>Product Name is Required🔝</p>}
        {errors?.productName?.type==='minLength'&&<p className='text-danger'>Minimum number of charecters are 3</p>}
        <label className='form-label'>Enter Product Price</label>
        <input type="number" {...register("productPrice",{required:true,min:0})} className='form-control mb-3' placeholder='Price...'/>
        {errors?.productPrice?.type==='required'&&<p className='text-danger'>Product Price is Required🔝</p>}
        {errors?.productPrice?.type==='min'&&<p className='text-denger'>Minimum Price must be Entered</p>}
        <label className="form-label">Enter Date of Manufacture</label>
        <input type="date" {...register("dateOfManufacture",{required:true})} className="form-control mb-3" />
        {errors?.dateOfManufacture?.type==='required'&&<p className='text-danger'>Date is Required🔝</p>}
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  )
}

export default CreateProducts
