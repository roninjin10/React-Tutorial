import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NavBar extends React.Component{
	render(){
		return (
			<div className='topnav'>
				<a href='#home'>Home</a>
				<a href='#account'>Account</a>
				<a href='#help'>Help</a>
			</div>
			);
	}
}

ReactDOM.render(< NavBar />,document.getElementById('app'));