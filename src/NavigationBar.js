import React from 'react';


export class NavigationBar extends React.Component{

     render(){
        return(
        <nav className="navbar" style={{backgroundColor: '#EBF5FB'}}>
            <a className="navbar-brand" style={{textAlign: 'center', color:'black', fontFamily: 'Pacifico, cursive'}}>Daily Planner</a>
        </nav>
        );
    }

}