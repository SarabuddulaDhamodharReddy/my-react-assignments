import {useForm} from "react-hook-form"
export default function CreateTask({handleCreateTask}){
    const {register,handleSubmit,formState:{errors}}=useForm()
    return(
        <div>
            <p className="display-5 fw-semibold text-center text-info my-3">Task Creation Form</p>
            <form className="mx-auto w-75 mt-5 p-4 bg-light" onSubmit={handleSubmit(handleCreateTask)}>
                <label className="form-label fw-semibold">Task Name</label>
                <input type="text" {...register("taskname",{required:true,minLength:2})}className="form-control mb-3" placeholder="Enter task name..."/>
                {errors?.taskname?.type==="required"&&<p className="text-danger">Task name is required</p>}
                {errors?.taskname?.type==='minLength'&&<p className="text-danger">Taskname must be atleast 2 characters</p>}
                <input type="datetime-local" {...register("datetime",{required:true})}  className="form-control mb-3" />
                {errors?.datetime?.type==="required"&&<p className="text-danger">Task date and time must be specified</p>}
                <label className="form-label fw-semibold">Choose a file related to your task</label>
                <input type="file" {...register("file")} className="form-control mb-3" />
                <textarea {...register("description")} className="form-control" placeholder="Description about your task..."/>
                <button type="submit" className="btn btn-success my-4">Add Task</button>
            </form>
        </div>
    )
}