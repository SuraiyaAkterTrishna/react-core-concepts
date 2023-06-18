import logo from "./logo.svg";
import "./App.css";

// 1. Declare variable and objects/array and use them dynamically
// 2. create component and props
// 3. Access array and send to the component as props 
/* const total = 124;

const student = {
  name: 'Sabib Khan', 
  salary: 500000,
  age: 32,
}
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
] 

const singerStyle = {
  backgroundColor: 'purple',
  color: 'blue', 
  padding: "4px",
  margin: "100px",
}

*/

const personStyle = {
  backgroundColor: 'orange', 
  padding: "20px",
  margin: "100px",
  border: '5px solid blue',
}

function App() {
  const persons = [
    {name: "Md. Monasef Mia", address: "Kolapara, Jessore", job: "Businessman", salary: 100000},
    {name: "Osman Goni", address: "Khepupara, Khulna", job: "Businessman", salary: 200000},
    {name: "Moazzem Mia", address: "Shekhati, Barisal", job: "Businessman", salary: 300000},
    {name: "Kamrujjaman Rony", address: "Jamrultala, Jessore", job: "Businessman", salary: 400000},
  ]
  return (
    <div>
    {/* <div className="App">
     <p style={{color: 'red', fontWeight: 'bold', fontSize: '50px'}}>Total Money is: {total + 76}</p>
      <p className='hero'>He is a Hero and his name is {student.name} and he is only {student.age}, His monthly Salary is {student.salary}</p>
      <p style={singerStyle}>The best singer of Bangladesh {singers[0].name} and the co-artist is {singers[1].name}</p> 
    </div> */}
    
    {/* <Person name= "Md. Monasef Mia" address="Kolapara, Jessore"></Person>
    <Person name= "Osman Goni" address = "Khepupara, Khulna"></Person>
    <Person name= "Moazzem Mia" address = "Shekhati, Barisal"></Person>
    <Person name = "Kamrujjaman Rony" address = "Jamrultala, Jessore"></Person> */}

    {
      persons.map(person => <Person name = {person.name} address = {person.address} key = {person.salary}></Person>)
    }

    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div style= {personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Address: {props.address}</p>
    </div>
  );
}

export default App;
