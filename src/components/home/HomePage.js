import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
	render(){
		return (
			<div >
				<ol className="breadcrumb">
					<li className="active"><a href="/">Home</a></li>
				</ol>
				<div className="jumbotron">
					<h1>Pension Administration</h1>
					<p> Professional Management of Pension Contributors</p>
					<Link to="about" className="btn btn-primary btn-lg">
					Learn more
					</Link>
				</div>
			</div>
		);
	}
}
export default HomePage;