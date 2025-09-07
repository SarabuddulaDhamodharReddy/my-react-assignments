import React from 'react'

function HandleUser({users,handleDeleteUser,handleUpdateUser}) {
  return (
    <div>
      <p className="display-3 text-warning text-center my-5 fw-semibold">Table of Users</p>
      <table className="table text-center mx-auto">
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Date</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map((userObj) => {return(
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.username}</td>
              <td>{userObj.date}</td>
              <td>{userObj.email}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDeleteUser(userObj.id)}>X</button>
              </td>
              <td>
                <button className="btn btn-warning" onClick={()=>handleUpdateUser(userObj)}>Edit</button>
              </td>
            </tr>)}
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HandleUser
