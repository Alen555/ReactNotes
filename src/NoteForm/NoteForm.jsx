import React, {Component} from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';


class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state={
            newNoteContent:'',
        };
        this.handleUserInput=this.handleUserInput.bind(this);
        this.writeNote=this.writeNote.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(){
        this.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent:'',
        })
    }

    addNote(note){
        const previousNotes=this.state.notes;
        previousNotes.push({id:previousNotes.length+1, noteContent:note});
    
        this.setState({
          notes: previousNotes
        });
      }

    render(){
        return(
            <div 
            className="formWrapper">
                <input
                className="noteInput"
                placeholder="Write a new note..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}
                />
                <button 
                className="noteButton"
                onClick={this.writeNote}
                >
                Add Note
                </button>
            </div>
        )
    }
}

export default NoteForm;