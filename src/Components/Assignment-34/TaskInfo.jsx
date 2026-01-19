import CreateTask from "./CreateTask"
import TaskList from "./TaskList"
import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
export default function TaskInfo() {
    let { register, handleSubmit, formState: { errors },setValue } = useForm()
    let [tasks, setTasks] = useState([])
    let [error, setErrors] = useState('')
    let [show, setShow] = useState(false)
    let [taskCount,setTaskCount]=useState(0)
    const handleShowOpen = function () {
        setShow(true)
    }
    const handleShowClose = function () {
        setShow(false)
    }
    const handleCreateTask = async (newTask) => {
        try {
            let res = await fetch('http://localhost:3000/tasks', {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(newTask)
            })
            if (res.status === 201) {
                setTasks(tasks => [...tasks, newTask])
                setErrors('')
                handleReadTask()
                setTaskCount(taskCount+1)
            }
            if (res.status === 404) setErrors(res.statusText)
        } catch (error) {
            setErrors(error.message)
        }

    }
    const saveEditedTask = async(modifiedUserObj) => {
        handleShowClose()
        let res=await fetch(`http://localhost:3000/tasks/${modifiedUserObj.id}`,{
            method:"PUT",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(modifiedUserObj)
        })
        if(res.status===200){
            setTasks(tasks=>[...tasks,modifiedUserObj])
            handleReadTask()
        }
    }
    const handleReadTask = async () => {
        let res = await fetch('http://localhost:3000/tasks')
        let taskData = await res.json()
        setTasks(taskData)
    }
    useEffect(() => {
        handleReadTask()
    }, [])
    const handleDeleteTask = async (id) => {
        let res = await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })
        let removedTask = await res.json()
        if (res.status === 200) {
            handleReadTask()
            setTaskCount(taskCount-1)
        }
    }
    const handleEditTask = (taskObjectToEdit) => {
        handleShowOpen()
        setValue("id",taskObjectToEdit.id)
        setValue("taskname",taskObjectToEdit.taskname)
        setValue("datetime",taskObjectToEdit.datetime)
        setValue("file",taskObjectToEdit.file)
        setValue("description",taskObjectToEdit.description)
    }
    return (
        <div className="row container-fluid">
            <div className="col-md-6">
                {error.length != 0 && <p className="display-5 fw-semibold text-center">{errors}</p>}
                <CreateTask handleCreateTask={handleCreateTask} />
            </div>
            <div className="col-md-6"><TaskList setTaskCount={setTaskCount} taskCount={taskCount} handleReadTask={handleReadTask} tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} /></div>
            <Modal show={show} onHide={handleShowClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p className="fw-semibold fs-2 text-info">Form to Edit Task</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(saveEditedTask)}>
                        <label className="form-label fw-semibold">Id</label>
                        <input disabled type="text" {...register("id")} className="form-control mb-3" />
                        <label className="form-label fw-semibold">Task Name</label>
                        <input type="text" {...register("taskname", { required: true, minLength: 2 })} className="form-control mb-3" placeholder="Enter task name..." />
                        {errors?.taskname?.type === "required" && <p className="text-danger">Task name is required</p>}
                        {errors?.taskname?.type === 'minLength' && <p className="text-danger">Taskname must be atleast 2 characters</p>}
                        <input type="datetime-local" {...register("datetime", { required: true })} className="form-control mb-3" />
                        {errors?.datetime?.type === "required" && <p className="text-danger">Task date and time must be specified</p>}
                        <label className="form-label fw-semibold">Choose a file related to your task</label>
                        <input type="file" {...register("file")} className="form-control mb-3" />
                        <textarea {...register("description")} className="form-control mb-3" placeholder="Description about your task..." />
                        <button type="submit" className="btn btn-success">Save</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>

    )
}