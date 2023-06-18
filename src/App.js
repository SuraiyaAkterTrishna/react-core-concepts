import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// 1. Declare variable and objects/array and use them dynamically
// 2. create component and props
// 3. Access array and send to the component as props 
// 4. useState 
// 5. useEffect  
function App() {
  return (
    <div>
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}
function Counter () {
  const [count, setCount] = useState(0);
  const increaseBtn = () => setCount(count + 1);
  const decreaseBtn = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseBtn}>Increase</button> 
      <br />
      <button onClick={decreaseBtn}>Decrease</button>
    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))

  }, []);

  return (
    <div>
      <p>{users.length}</p>
      
      {
        users.map(user => <User name = {user.name} email = {user.email}></User>)
      }
    </div>
  );
}

function User (props) {
  console.log(props);
  return(
    <div className="user">
      <h1>User: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default App;
