import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

export default function App() {
  const [alunos , setAlunos] = useState([]);
  
  return (
    <div className='container'>
      <ul className='ulNames'>
        {alunos.map((e)=>{
          return(
            <li className='liList'>
              <p className='name'>{e}</p>
            </li>
          )
        })}
      </ul>
      <input type="text" id='inputName' class="form-control txtInput" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
      <button type="button" class="btn btn-primary" onClick={()=>{setAlunos([...alunos, document.getElementById('inputName').value]); document.getElementById('inputName').value = ''}}>Primary</button>


      
   </div>
  );
}