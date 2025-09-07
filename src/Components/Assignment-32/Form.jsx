import { useForm } from "react-hook-form"
import './Form.css'
function Form() {
  let{register,handleSubmit,formState:{errors}}=useForm()
  let FormSubmission=function(obj){
    console.log(obj)
  }
  return (
    <div className="Whole">
      <p className="display-3 text-center text-dark mb-5 fw-semibold">Registration Form</p>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(FormSubmission)}>
        <label className="form-label">Enter Full Name</label>
        <input type="text" {...register("username",{required:true,minLength:3})} className="form-control mb-3" placeholder="Full Name"/>
        {errors?.username?.type==="required"&&<p className="text-danger">Username is required</p>}
        {errors?.username?.type==="minLength"&&<p className="text-danger">Username must be atleast 3 charecters</p>}
        <label className="form-label">Enter Email</label>
        <input type="email" placeholder="Email..."  className="form-control mb-3" {...register("email",{required:true})}/>
        {errors?.email?.type==="required"&&<p className="text-danger">Email is required</p>}
        <label className="form-label">Enter Password</label>
        <input type="password" className="form-control mb-3" placeholder="Password..." {...register("password",{minLength:6})}/>
        <input type="password" className="form-control mb-3" placeholder="Confirm your password..." id="" />
        {errors?.username?.type==="minLength"&&<p className="text-danger">Password must be atleast 6 charecters</p>}
        <label className="form-label">Enter Age</label>
        <input type="number" className="form-control mb-3"  placeholder="Age..." {...register("age",{min:18})}/>
        {errors?.username?.type==="minLength"&&<p className="text-danger">Age must be greater than 18</p>}
        <input type="checkbox" className="form-check-input mb-3"  {...register("terms")}/>
        <label className="form-label mx-2 mb-3">Terms & Conditions</label>
        <button type="submit" className="btn btn-success d-block">Submit</button>
      </form>
    </div>
  )
}

export default Form
