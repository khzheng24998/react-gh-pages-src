import React, { Component } from 'react';
import Icon from './Icon';

const windowStyles = {
	zIndex: 2,
	height: "70%",
	width: "50%",
	position: "absolute",
	top: "15%",
	left: "25%",
	backgroundColor: "white",
	borderRadius: 3
}

const windowBarStyles = {
	width: "100%",
	height: 22,
	backgroundColor: "#5f5f5f",
	borderRadius: "3px 3px 0px 0px",
	fontSize: 11,
	color: "white",
	fontWeight: 600
}

let count = 0;

const bioText1 = "Hello there! My name is Kenny Zheng and I am currently a junior pursuing my B.S. in Computer Science at the University of California, Los Angeles and an aspiring software engineer. A desire to create new and interesting things is what drives me to pursue software engineering, whether it be building something practical, such as an online ordering system for my parents’ restaurant, or creating something fun, such as a game.";
const projectText1 = " is an online ordering system that I'm currently developing for my parents' Chinese restuarant. While I still have a ways to go before I can deploy a fully functional and secure version of the system, I have thus far managed to create a user account system with standard features such as password reset and email verification. Future plans include updating the frontend to use a modern framework such as React, rewriting the code using TypeScript, and caching server data on the client side using HTML5 web storage."

class Window extends Component 
{
	constructor(props)
	{
		super(props);
		this.handleCloseClick = this.handleCloseClick.bind(this);

		count++;
		let top = 15 + count * 2;
		top += "%";
		let left = 25 + count * 2;
		left += "%";
		let zIndex = count + 2;

		this.state = {};
		this.state.styles = {
			zIndex: zIndex,
			height: "70%",
			width: "50%",
			position: "absolute",
			top: top,
			left: left,
			backgroundColor: "white",
			borderRadius: 3,
			boxShadow: "1px 1px 4px black"
		}
	}

	handleCloseClick()
	{
		const name = this.props.name;
		this.props.onClose(name);
	}

	render()
	{
		return (
			<div style={this.state.styles}>
				<div style={windowBarStyles}>
					<img src="images/closebutton.png" height="22" onClick={this.handleCloseClick} style={{cursor: "pointer", display: "inline-block"}} />
				</div>

				{(this.props.name === "About Me") && (
					<div>
						<div style={{padding: 10, width: "35%", display: "inline-block"}}>
							<img src="images/profile.jpg" width="100%" />
						</div>
						<div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
							<p style={{fontSize: 13, marginTop: 8}}>{bioText1}</p>
						</div>
					</div>
				)}

				{(this.props.name === "Skills") && (
					<div>
						<Icon image="images/folder.png" name="Languages" onOpen={this.props.onOpen} />
						<Icon image="images/folder.png" name="Libraries" onOpen={this.props.onOpen} />
						<Icon image="images/folder.png" name="Databases" onOpen={this.props.onOpen} />
						<Icon image="images/folder.png" name="Environments" onOpen={this.props.onOpen} />
						<Icon image="images/folder.png" name="Other" onOpen={this.props.onOpen} />
					</div>
				)}

				{(this.props.name === "Languages") && (
					<div>
						<Icon image="images/c.png" name="C" />
						<Icon image="images/cplusplus.png" name="C++" />
						<Icon image="images/html5.png" name="HTML" />
						<Icon image="images/css3.png" name="CSS" />
						<Icon image="images/javascript.png" name="JavaScript" />
						<Icon image="images/python.png" name="Python" />
						<Icon image="images/noimage.png" name="Verilog" />
					</div>
				)}

				{(this.props.name === "Libraries") && (
					<div>
						<Icon image="images/react.png" name="React.js" />
						<Icon image="images/express.png" name="Express.js" />
						<Icon image="images/jquery.png" name="jQuery" />
						<Icon image="images/django.png" name="Django" />
					</div>
				)}

				{(this.props.name === "Databases") && (
					<div>
						<Icon image="images/mongodb.png" name="MongoDB" />
					</div>
				)}

				{(this.props.name === "Environments") && (
					<div>
						<Icon image="images/nodejs.png" name="Node.js" />
						<Icon image="images/linux.png" name="Linux" />
						<Icon image="images/unity.png" name="Unity" />
					</div>
				)}

				{(this.props.name === "Projects") && (
					<div>
						<Icon image="images/chinataste.png" name="China Taste" onOpen={this.props.onOpen}/>
						<Icon image="images/fishfarm.png" name="Fish Farm" />
					</div>
				)}

				{(this.props.name === "China Taste") && (
					<div>
						<div style={{padding: 15, width: "60%", display: "inline-block"}}>
							<img src="images/chinataste3.png" width="100%" />
						</div>
						<div style={{width: "30%", display: "inline-block", verticalAlign: "top", fontSize: 13, paddingRight: 10}}>
							<p style={{marginBottom: 4}}><strong>Name: </strong>China Taste</p>
							<p style={{marginBottom: 4}}><strong>URL: </strong>Coming soon</p>
							<p style={{marginBottom: 4}}><strong>Contributors: </strong>Kenny Zheng</p>
							<p style={{marginBottom: 4}}><strong>Technologies Used: </strong></p>
							<p style={{marginTop: 4}}>HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express, MongoDB</p> 
						</div>
						<div style={{padding: 0, paddingLeft: 18}}>
							<p style={{fontSize: 13, marginTop: 0, paddingRight: 10}}><strong>Description: </strong><i>China Taste</i>{projectText1}</p>
						</div>
					</div>
				)}

			</div>
		);
	}
}

export default Window;