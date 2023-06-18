import logo from './logo.svg';
import './App.css';

const total = 124;

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
function App() {
  return (
    <div className="App">
      <p style={{color: 'red', fontWeight: 'bold', fontSize: '50px'}}>Total Money is: {total + 76}</p>
      <p className='hero'>He is a Hero and his name is {student.name} and he is only {student.age}, His monthly Salary is {student.salary}</p>
      <p style={singerStyle}>The best singer of Bangladesh {singers[0].name} and the co-artist is {singers[1].name}</p>
    </div>
  );
}

export default App;
