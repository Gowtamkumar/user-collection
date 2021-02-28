
//import logo from './logo.svg';
import './App.css';
import userData from './Data/Fackdata.json';
import { useEffect, useState } from 'react';
import User from './Components/User/User';
import UserAdd from './Components/UserAdd/UserAdd';
import Salary from './Components/Salary/Salary';

function App() {
  const [users, setUsers] = useState([]);
  const [userAdd, setUserAdd] = useState([]);

  const HeandlerAddUser =(user) =>{
    console.log("add clicked",user)
    const newAdd = [...userAdd,user]
    setUserAdd(newAdd);

  }

  useEffect(() => {
    setUsers(userData)
  }, [])

  return (
    <div className="App">
      <div className="main-container">
        <div className="user-container">
          
          {
            users.map(user => <User user={user} HeandlerAddUser={HeandlerAddUser} key={user.id} ></User>)
          }
        </div>
        <div className="userAdd-container">
          <h3>Total User: {users.length}</h3>
         <UserAdd user={userAdd}></UserAdd>
         <Salary user={userAdd} ></Salary>
        </div>
      </div>




    </div>
  );
}

export default App;
