import CreateUser from "./CreateUser"
import { useState} from "react"

function UserInfo() {
    let [users,setUsers]=useState([])
    const handleCreateUser=async function(obj){
        let res=await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
      if(res.reponse==='201')
      setUsers([...users,obj])
    }
  return (
    <div>
      <div><CreateUser handleCreateUser={handleCreateUser}/></div>
    </div>
  )
}

export default UserInfo
