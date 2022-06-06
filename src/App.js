import React, {useState} from 'react';
import './App.css'
import bootstrap from 'bootstrap';

import CardNote from './components/cardNote';

function App(){

  const [notes, setNotes] = useState([
    {
      id:'0',
      title:'Nota0',
      content:'fksdafh fldjkasjf ljd dfjka, ldkafjlkaj , faihdfhh dklfja na fnlkdla , ajdfaljf lkjf.'
    },

    {
      id:'1',
      title:'Nota1',
      content:'fksdafh fldjkasjf ljd dfjka, ldkafjlkaj , faihdfhh dklfja na fnlkdla , ajdfaljf lkjf.'
    },

    {
      id:'2',
      title:'Nota2',
      content:'fksdafh fldjkasjf ljd dfjka, ldkafjlkaj , faihdfhh dklfja na fnlkdla , ajdfaljf lkjf.'
    }
  ])

  function addNote(titleInput, contentInput){
    let newId = (notes.length - 1) + 1;
    let newNote = {
      id:`${newId}`,
      title:titleInput,
      content:contentInput
    }

    setNotes([...notes, newNote]);

  }

  function deleteNote(id){
    let indiceNote;

    notes.forEach((value, indice)=>{
      if(value.id == id){
        indiceNote = indice;
      }
    })

    let data = notes;
    data.splice(indiceNote, 1);

    setNotes([...data]);
  }
  
  return(   
    <div id='body'>
      <h1>Hellow World</h1>

      <div className="dvForm">
        <input type="text" id='titleNote' className="form-control txtInput" placeholder='Titulo...'/>
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      </div>

      <button type="button" className="btn btn-danger btnAdd" onClick={()=>addNote(document.getElementById('titleNote').value, document.getElementById('floatingTextarea').value)}>ADD</button>

      <div className='accordion'>
        {notes.map((item)=><CardNote key={item.id} data={item} deleteNote={deleteNote}/>)}
      </div>
    </div>
  )
  
}

export default App;