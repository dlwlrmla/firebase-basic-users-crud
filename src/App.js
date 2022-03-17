import { useState, useEffect } from "react"
import './App.css';
import { db } from "./firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"
import User from "./User"


function App() {

const [newName, setNewName] = useState("")
const [newAge, setNewAge] = useState(0)
const [users, setUsers] = useState([])



const updateUser = async (id, age,name) => {
  const newFields = {age: age,name:name}
  const userDoc = doc(db,"users",id)
  await updateDoc(userDoc,newFields)
  window.location.replace('');
}
const deleteUser = async (id) => {
  const userDoc = doc(db,"users",id)
  await deleteDoc(userDoc)
  window.location.replace('');
}
useEffect (() => {
  const getUsers = async () => {
    const data = await getDocs(collection(db,"users"))
    //setUsers(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
    //console.log(data.docs[0].data())
    setUsers(data.docs.map((dato) => ({...dato.data(),id:dato.id})))
  }
 
  getUsers()
  

}, [])
console.log(users)
const createUser = async () => {
  await addDoc(collection(db,"users"),{name:newName, age:Number(newAge), married:false})
  window.location.replace('');
}

  return (
    <div className="App">
      <h1>users</h1>
      <input placeholder ="name"type="text" onChange={(e) => setNewName(e.target.value)}/>
      <input type="number" placeholder="age" onChange={(e)=> setNewAge(e.target.value)}/>
      <button onClick={createUser}>Create User</button>
        {users.length > 0 ? users.map((user) =>(
            <div key={user.id}>
            <User name={user.name}
            id={user.id} married = {user.married}
            key={user.id} age={user.age} 
            deleteUser={deleteUser} updateUser={updateUser}/>
{/*             <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => updateUser(user.id,user.age)}>Increase Age</button>
            <button onClick={() =>  deleteUser(user.id)}>Delete User</button> */}
           </div>
        )) : null}
    </div>
  );
}

export default App;
