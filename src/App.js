import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes:[
        {id:1, noteContent:"Note 1 Here!"},
        {id:1, noteContent:"Note 2 Here!"},
      ],
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
        {
          this.state.notes.map((note)=>{
            return(
              <Note noteContent={note.noteContent} noteId={note.noteId} key={note.id}/>
            )
          })
        }
        </div>
        <div className="notesFooter">
          Footer will go here...
        </div>
      </div>
    );
  }
}

export default App;
