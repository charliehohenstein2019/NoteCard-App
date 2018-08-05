import React from 'react';
import { PostCard } from './PostCard';
import { PostCardForm } from './PostCardForm';

export class PostCardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
            note: "- Add Tasks..",
            theme: 'blue',
            colorIndex: 1,
            cardBackgroundColor: '#FBFCFC',
            cardContentColor: '#5DADE2',
        }
        this.colorArray = ['blue', 'red', 'brown', 'pink', 'maroon', 'teal', 'purple', 'green', 'navy'];
        this.changeMode = this.changeMode.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.incrementColorIndex = this.incrementColorIndex.bind(this);
        this.getColors = this.getColors.bind(this);
    }

    changeMode() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    saveChanges(newNote) {
        this.setState({
            editMode: !this.state.editMode,
            note: newNote
        });
    }

    incrementColorIndex() {
        if (this.state.colorIndex >= (this.colorArray.length - 1)) {
            this.setState({
                colorIndex: 0
            });
        } else {
            this.setState({
                colorIndex: this.state.colorIndex + 1
            })
        }
        return this.state.colorIndex;
    }

    getColors(color) {
        if (color === 'blue') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#5DADE2'
            });
        }
        else if (color === 'purple') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#AB47BC'
            });
        }
        else if (color === 'green') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#81C784'
            });
        }
        else if (color === 'red') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#EF5350'
            });
        }
        else if (color === 'pink') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#EC407A'
            });
        }
        else if (color === 'maroon') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#db3236'
            });
        }
        else if (color === 'teal') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#1ABC9C'
            });
        }
        else if ((color === 'navy')) {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#5D6D7E'
            });
        }
        else if (color === 'brown') {
            this.setState({
                cardBackgroundColor: '#FBFCFC',
                cardContentColor: '#8D6E63'
            });
        }
    }


    changeTheme() {

        this.setState({
            theme: this.colorArray[this.incrementColorIndex()]
        });
        var color = this.colorArray[this.state.colorIndex];
        this.getColors(color);
    }


    render() {
        let object;
        if (this.state.editMode) {
            object = <PostCard changeTheme={this.changeTheme} onClick={this.changeMode} cardBackgroundColor={this.state.cardBackgroundColor}
                cardContentColor={this.state.cardContentColor} note={this.state.note} day={this.props.day} />;
        }
        else {
            object = <PostCardForm cardBackgroundColor={this.state.cardBackgroundColor}
                cardContentColor={this.state.cardContentColor} saveChanges={this.saveChanges} note={this.state.note} day={this.props.day} />
        }
        return <div>{object}</div>;
    }
}
