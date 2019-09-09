import React, { Component } from 'react';
import Icon from './Icon';
import {Desktop, AboutMe, Skills, Languages, LibrariesAndFrameworks, Databases, Projects, ChinaTaste, FishFarm, Experience, CNCSoftware, Symantec, Social} from './WindowContents';
import './styles.css';

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
		this.handleForward = this.handleForward.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

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
			borderRadius: 3,
			boxShadow: "1px 1px 4px black",
			backgroundColor: "white"
		}

		this.state.path = ["Desktop", this.props.name];
		this.state.index = 1;

		this.state.hoverL = false;
		this.state.hoverR = false;
	}

	handleWindowOpen(name)
	{
		let arr = this.state.path;
		let idx = this.state.index;

		if (idx === arr.length - 1)
		{
			arr.push(name);
			this.setState({path: arr, index: idx + 1});
		}
		else
		{
			if (arr[idx + 1] !== name)
			{
				while (idx !== arr.length - 1)
					arr.pop();

				arr.push(name);
				this.setState({path: arr, index: idx + 1});
			}
			else
				this.setState({path: arr, index: idx + 1})
		}
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
		if (this.state.index > 0)
		{
			const idx = this.state.index - 1;
			this.setState({index: idx});
		}
	}

	handleForward()
	{
		if (this.state.index < this.state.path.length - 1)
		{
			const idx = this.state.index + 1;
			this.setState({index: idx});
		}
	}

	handleMouseEnter(e)
	{
		const id = e.target.id;
		if (id === "navBtnL")
			this.setState({hoverL: true});
		else
			this.setState({hoverR: true});
	}

	handleMouseLeave()
	{
		this.setState({hoverL: false, hoverR: false});
	}

	render()
	{
		const path = this.state.path;
		const classL = (this.state.hoverL) ? "navBtnEnter" : "navBtnLeave";
		const classR = (this.state.hoverR) ? "navBtnEnter" : "navBtnLeave";

		return (<div id="window" className="hello" style={this.state.styles}>

			<div id="windowBar" style={windowBarStyles}>
				<img src="images/closebutton.png" height="22" onClick={this.handleWindowClose} style={{cursor: "pointer", display: "inline-block"}} />
				<p style={{display: "inline-block", color: "white", fontSize: 12, verticalAlign: "top", marginTop: 0, padding: 3}}>{path[this.state.index]}</p>
			</div>

			<div id="windowBar2" style={windowBar2Styles}>

				<div id="navBtnL" style={navButtonLStyles} className={classL} onClick={this.handleBack} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
					<img src="images/backwardarrow.png" height="16" />
				</div>

				<div id="navBtnR" style={navButtonRStyles} className={classR} onClick={this.handleForward} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
					<img src="images/forwardarrow.png" height="16" />
				</div>

				{path.map((dirName, index) => {

					let style = {
						display: "inline-block",
						verticalAlign: "top",
						border: "1px solid #808080",
						borderLeft: "none",
						height: 18,
						paddingTop: 1,
						paddingBottom: 1,
						paddingRight: 4,
						paddingLeft: 4,
						backgroundColor: "#5f5f5f",
						borderRadius: 0
					}

					if (index === 0)
					{
						style.borderRadius = "3px 0px 0px 3px";
						style.borderLeft = "1px solid #808080";
					}
					else if (index === path.length - 1)
						style.borderRadius = "0px 3px 3px 0px";

					if (path[this.state.index] === dirName)
						style.backgroundColor = "#4d4d4d";

					return <div style={style}>{dirName}</div>;
				})}

			</div>

			<div id="windowContents" style={{height: "85%", overflowY: "auto"}}>

				{(this.state.path[this.state.index] === "Desktop") && <Desktop onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "About Me") && <AboutMe onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Social") && <Social onOpen={this.handleWindowOpen} />}

				{(this.state.path[this.state.index] === "Projects") && <Projects onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "China Taste") && <ChinaTaste onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Fish Farm") && <FishFarm onOpen={this.handleWindowOpen} />}

				{(this.state.path[this.state.index] === "Skills") && <Skills onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Languages") && <Languages onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Libraries & Frameworks") && <LibrariesAndFrameworks onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Databases") && <Databases onOpen={this.handleWindowOpen} />}

				{(this.state.path[this.state.index] === "Experience") && <Experience onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "CNC Software") && <CNCSoftware onOpen={this.handleWindowOpen} />}
				{(this.state.path[this.state.index] === "Symantec") && <Symantec onOpen={this.handleWindowOpen} />}

			</div>

		</div>);
	}
}

export default Window;
