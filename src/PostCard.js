import React from 'react';
import './NoteCard.css';

export class PostCard extends React.Component {

  constructor(props) {
    super(props);
    this.editableMode = this.editableMode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);

  }

  editableMode() {
    this.props.onClick();

  }

  changeTheme() {
    this.props.changeTheme();
  }

  render() {

    return (
      <div className="card" style={{ backgroundColor: this.props.cardBackgroundColor, fontFamily: 'Pacifico, cursive' }}>
        <div className="container">
          <h4><b style={{ color: this.props.cardContentColor }}>{this.props.day}</b></h4>
          <p style={{ whiteSpace: 'pre-wrap', font: 'bold', fontFamily: "Indie Flower, cursive" }}>{this.props.note}</p>
          <br />
          <br />
          <a onClick={this.changeTheme} style={{ color: 'black', fontFamily: "Pacifico", backgroundColor: this.props.cardContentColor, position: 'absolute', left: 5, bottom: 0 }} className="btn">Change Color</a>
          <a onClick={this.editableMode} style={{ color: 'black', fontFamily: "Pacifico", backgroundColor: this.props.cardContentColor, position: 'absolute', right: 5, bottom: 0 }} className="btn">Edit</a>
        </div>
      </div>
    );


  }
}
