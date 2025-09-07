import CreateUser from "./CreateUser"
import HandleUser from "./HandleUser"
import { useState ,useEffect} from "react"

function UserInfo() {
    let [users,setUsers]=useState([])
    const handleCreateUser=async function(obj){
        let res=await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
      setUsers([...users,obj])
    }
    const handleUpdateUser=function(userObjtoedit){
        console.log(userObjtoedit)
    }
    const handleDeleteUser=async function(id){
        let res = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
        let removedUser = await res.json();
        if (res.status === 200) {
            handleReadUser();
        }
    }
    const handleReadUser=async function(){
        let res=await fetch('http://localhost:3000/users')
        let data=await res.json()
        setUsers(data);
    }
    useEffect(()=>{handleReadUser()},[])  
  return (
    <div className="row">
      <div className="col-md-6"><CreateUser handleCreateUser={handleCreateUser}/></div>
      <div className="col-md-6"><HandleUser users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/></div>
    </div>
  )
}

export default UserInfo
