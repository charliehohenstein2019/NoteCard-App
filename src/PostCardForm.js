import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
export class PostCardForm extends React.Component {


    constructor(props) {
        super(props);
        this.saveChanges = this.saveChanges.bind(this);
        this.parseInput = this.parseInput.bind(this);
    }

    parseInput(newNote) {
        var arr = newNote.split('-');
        var formattedString = '';
        var i;
        for (i = 0; i < arr.length; i++) {
            formattedString = formattedString + '- ' + arr[i] + '\n';
        }

        var getRidOfFirstLine = formattedString.substring(formattedString.indexOf("\n") + 1)
        var getRidOfBlankLines = getRidOfFirstLine.replace(/^\s*[\r\n]/gm, '');
        return getRidOfBlankLines;

    }

    saveChanges() {
        var note = this.parseInput(document.getElementById('txtNote').value);
        this.props.saveChanges(note);
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            document.getElementById('txtNote').value += '- ';
        }
    }


    render() {
        return (
            <div>
                <div className="modal-content" style={{ display: 'block' }}>
                    <div className="modal-header">
                        <h2 style={{ fontFamily: 'Pacifico, cursive', backgroundColor: '#FBFCFC', color: this.props.cardContentColor }}>{this.props.day}</h2>
                    </div>
                    <div className="modal-body">
                        <textarea id='txtNote' onKeyUp={this.handleEnter} style={{ fontFamily: "Indie Flower, cursive" }} type="text" rows="5" className="form-control">{this.props.note}</textarea>
                    </div>
                    <div className="modal-footer" style={{ backgroundColor: '#FBFCFC', color: this.props.cardContentColor }}>
                        <p style={{ fontFamily: 'Pacifico, cursive' }}>Add a '-' before each task</p>
                        <button onClick={this.saveChanges} style={{ fontFamily: 'Pacifico, cursive', backgroundColor: this.props.cardContentColor }} className="btn">Save</button>
                    </div>
                </div>
            </div>
        );
    }


}