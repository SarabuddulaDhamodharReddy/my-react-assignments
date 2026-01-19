export default function TaskList({setTaskCount,taskCount,tasks,handleDeleteTask,handleEditTask,handleReadTask}){
    setTaskCount(tasks.length)
    return(
        <div>
            <div className="row">
            <p className="col-md-10 text-center mt-3 fw-semibold display-5 text-black">List Of Tasks</p>
            <button type="button" className="mt-5 col-md-2 btn btn-dark fw-semibold">Count : {taskCount}</button>
            </div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>TaskName</th>
                        <th>Date&Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
            
            <tbody>
            {
                tasks.map(taskObj=><tr key={taskObj.id}>
                    <td>{taskObj.id}</td>
                    <td>{taskObj.taskname}</td>
                    <td>{taskObj.datetime}</td>
                    <td>{taskObj.description}</td>
                    <td>
                        <button className="btn btn-danger" onClick={()=>handleDeleteTask(taskObj.id)}>X</button>
                    </td>
                    <td>
                        <button className="btn btn-warning" onClick={()=>handleEditTask(taskObj)}>Edit</button>
                    </td>
                </tr>)
            }
            </tbody>
            </table>
        </div>
    )
}