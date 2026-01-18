import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
function CreateUser({handleCreateUser}) {
    let [jsonserver,setjsonserever]=useState(true)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const checkJsonServer=async function() {
      let res=await fetch('http://localhost:3000/users')
      if(res.status==200)setjsonserever(false);
    }
    useEffect(()=>{
      checkJsonServer()
    },[jsonserver])
  return (
    <div>
      <p className="display-3 fw-semibold text-center text-info my-5">Registration Form</p>
      {
        jsonserver&&<p className=' text-danger text-center'>Please start the json server before adding the user
        (Reload the page after starting the json server)</p>
      }{(!jsonserver)&&
      <form className='w-75 mx-auto' onSubmit={handleSubmit(handleCreateUser)} >
        <input type="text" {...register("username",{required:true,minLength:3})} id="" className="form-control mb-3" placeholder='Username...'/>
        {errors?.username?.type==="required"&&<p className='text-danger'>Enter the username</p>}
        {errors?.username?.type==="minLength"&&<p className='text-danger'>Minimum number of charecters is 3</p>}
        <input type="date" {...register("date",{required:true})} id="" className="form-control mb-3" />
        {errors?.date?.type==="required"&&<p className='text-danger'>Select a date</p>}
        <input type="email" {...register("email",{required:true})} id="" className="form-control mb-3" placeholder='Email...' />
        {errors?.email?.type==="required"&&<p className='text-danger'>Enter a valid email</p>}
        <button type="submit" className="btn btn-success">Add User</button>
      </form>
      }
    </div>
  )
}

export default CreateUser
