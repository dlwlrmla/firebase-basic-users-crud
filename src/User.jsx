import React, { useState } from 'react'
import {updateDoc, deleteDoc, userDoc, doc } from "firebase/firestore"
import { db } from "./firebase-config"

const User = ({name, age,id,deleteUser,married,updateUser}) => {

const [edit, setEdit] = useState(false)
const [newName, setNewName] = useState(name)
const [newAge, setNewAge] = useState(age)
console.log(married)
const handleSubmit = e =>{
  e.preventDefault()
  updateUser(id,newName,newAge)
}
  return (
    <div>

        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>married: {married ? <p>true</p>: <p>false</p>}</h1>
      <button onClick={()=> deleteUser(id)}>delete</button>
      { edit ? 
      <form onSubmit={handleSubmit}>
          <label htmlFor="">nombre</label>
          <input type="text" value={newName} placeholder={name} onChange={(e)=> setNewName(e.target.value)}/>
          <label htmlFor="">age</label>
          <input type="number" value={newAge} placeholder={age} onChange={(e)=> setNewAge(e.target.value)} />
          <button type="submit">change</button>
      </form> : <button onClick={() => setEdit(!edit)}>Edit</button>}
      
    </div>
  )
}

export default User