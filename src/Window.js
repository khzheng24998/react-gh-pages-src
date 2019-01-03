import React, { Component } from 'react';
import Icon from './Icon';
import {Desktop, AboutMe, Skills, Languages, Libraries, Databases, Environments, Projects, ChinaTaste, FishFarm} from './WindowContents';

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

const windowBar2Styles = {
	width: "100%",
	height: 26,
	backgroundColor: "#5f5f5f",
	fontSize: 11,
	color: "white",
	borderTop: "1px solid #808080",
	paddingTop: 4
}

const navButtonLStyles = {
	display: "inline-block",
	border: "1px solid #808080",
	borderRadius: "3px 0px 0px 3px",
	height: 18,
	paddingTop: 2,
	paddingRight: 2,
	marginLeft: 4,
	cursor: "pointer"
}

const navButtonRStyles = {
	display: "inline-block",
	border: "1px solid #808080",
	borderLeft: "none",
	borderRadius: "0px 3px 3px 0px",
	height: 18,
	paddingTop: 2,
	paddingLeft: 2,
	cursor: "pointer",
	marginRight: 5
}

const pathStyles = {
	display: "inline-block",
	verticalAlign: "top",
	border: "1px solid #808080",
	borderLeft: "none",
	height: 18,
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 4,
	paddingLeft: 4,
	cursor: "pointer"
}

const pathStylesL = {
	display: "inline-block",
	verticalAlign: "top",
	border: "1px solid #808080",
	borderRadius: "3px 0px 0px 3px",
	height: 18,
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 4,
	paddingLeft: 4,
	cursor: "pointer"
}

const pathStylesR = {
	display: "inline-block",
	verticalAlign: "top",
	border: "1px solid #808080",
	borderLeft: "none",
	borderRadius: "0px 3px 3px 0px",
	height: 18,
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 4,
	paddingLeft: 4,
	cursor: "pointer"
}

const pathStylesM = {
	display: "inline-block",
	verticalAlign: "top",
	border: "1px solid #808080",
	borderRadius: 3,
	height: 18,
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 4,
	paddingLeft: 4,
	cursor: "pointer"
}

let xOffset = 23;
let yOffset = 13;
let zIndex = 1;

class Window extends Component 
{
	constructor(props)
	{
		super(props);
		this.handleWindowClose = this.handleWindowClose.bind(this);
		this.handleWindowOpen = this.handleWindowOpen.bind(this);
		this.handleBack = this.handleBack.bind(this);

		xOffset += 2;
		yOffset += 2;
		zIndex++;

		this.state = {};
		this.state.styles = {
			zIndex: zIndex,
			height: "70%",
			width: "50%",
			position: "absolute",
			top: (yOffset + "%"),
			left: (xOffset + "%"),
			backgroundColor: "white",
			borderRadius: 3,
			boxShadow: "1px 1px 4px black"
		}

		this.state.path = ["Desktop", this.props.name];
	}

	handleWindowOpen(name)
	{
		let stack = this.state.path;
		stack.push(name);
		this.setState({path: stack});
	}

	handleWindowClose()
	{
		if (this.state.styles.zIndex === zIndex)
		{
			xOffset -= 2;
			yOffset -= 2;
			zIndex--;
		}

		const name = this.props.name;
		this.props.onClose(name);
	}

	handleBack()
	{
		let stack = this.state.path;
		if (stack.length !== 1)
		{
			stack.pop();
			this.setState({path: stack});	
		}
	}

	render()
	{
		const top = this.state.path[this.state.path.length - 1];
		const path = this.state.path;

		return (<div id="window" style={this.state.styles}>

			<div id="windowBar" style={windowBarStyles}>
				<img src="images/closebutton.png" height="22" onClick={this.handleWindowClose} style={{cursor: "pointer", display: "inline-block"}} />
				<p style={{display: "inline-block", color: "white", fontSize: 12, verticalAlign: "top", marginTop: 0, padding: 3}}>{top}</p>
			</div>

			<div id="windowBar2" style={windowBar2Styles}>

				<div style={navButtonLStyles} onClick={this.handleBack}>
					<img src="images/backwardarrow.png" height="16" />
				</div>

				<div style={navButtonRStyles}>
					<img src="images/forwardarrow.png" height="16" />
				</div>

				{path.map(function(dirName, index) {
					
					let style = pathStyles;
					if (path.length === 1)
						style = pathStylesM;
					else if (index === 0)
						style = pathStylesL;
					else if (index === path.length - 1)
						style = pathStylesR;

					return <div style={style}>{dirName}</div>; 
				})}

			</div>

			<div id="windowContents" style={{height: "85%", overflowY: "auto"}}>

				{(top === "Desktop") && <Desktop onOpen={this.handleWindowOpen} />}
				{(top === "About Me") && <AboutMe onOpen={this.handleWindowOpen} />}
				{(top === "Projects") && <Projects onOpen={this.handleWindowOpen} />}
				{(top === "China Taste") && <ChinaTaste onOpen={this.handleWindowOpen} />}
				{(top === "Fish Farm") && <FishFarm onOpen={this.handleWindowOpen} />}
				{(top === "Skills") && <Skills onOpen={this.handleWindowOpen} />}
				{(top === "Languages") && <Languages onOpen={this.handleWindowOpen} />}

			</div>

		</div>);
	}
}

export default Window;