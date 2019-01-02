import React, { Component } from 'react';

const skillLevelBoxStyles = {
	position: "absolute",
	width: 120,
	height: 120,
	border: "2px solid #808080",
	borderRadius: 4,
	backgroundColor: "white",
	textAlign: "center",
	marginLeft: 25,
	marginTop: -25
}

const dict = {
	"C": 4,
	"C++": 4,
	"HTML": 2,
	"CSS": 2,
	"JavaScript": 3,
	"Python": 1,
	"Verilog": 3,
	"React.js": 2,
	"Express.js": 3,
	"jQuery": 3,
	"Django": 1,
	"MongoDB": 2,
	"Node.js": 3,
	"Linux": 2,
	"Unity": 1
}

class Icon extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.state.showSkillLevel = false;
		this.state.image = "";
		this.state.skillLevel = "";

		this.handleIconClick = this.handleIconClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleIconClick()
	{
		const name = this.props.name;
		this.props.onOpen(name);
	}

	handleMouseEnter()
	{
		const name = this.props.name;
		if (dict[name] !== undefined)
		{
			let imageFile = "";
			let level = "";
			switch(dict[name])
			{
				case 1: imageFile = "images/beginner.png"; level = "Beginner"; break;
				case 2: imageFile = "images/intermediate.png"; level = "Intermediate"; break;
				case 3: imageFile = "images/proficient.png"; level = "Proficient"; break;
				case 4: imageFile = "images/advanced.png"; level = "Advanced"; break;
				default: imageFile = "ERROR"; level = "ERROR";
			}

			this.setState({showSkillLevel: true});
			this.setState({image: imageFile});
			this.setState({skillLevel: level});
		}
	}

	handleMouseLeave()
	{
		this.setState({showSkillLevel: false});
	}

	render()
	{
		return (<div style={{paddingLeft: 20, paddingTop: 10, paddingRight: 20, display: "inline-block"}}>
        	<img src={this.props.image} height="50" width="50" style={{paddingBottom: 0, marginBottom: 0, cursor: "pointer"}} onClick={this.handleIconClick} onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
        	<p style={{fontSize: 11, padding: 0, margin: 0, textAlign: "center", width: 50, color: this.props.fontColor}}>{this.props.name}</p>
        	{this.state.showSkillLevel && (
        		<div style={skillLevelBoxStyles}>
        			<p style={{fontSize: 12, fontWeight: 700, textDecoration: "underline", marginBottom: 10}}>Skill Level:</p>
        			<img src={this.state.image} width="110"/>
        			<p style={{fontSize: 12, fontWeight: 700, marginTop: 5}}>{this.state.skillLevel}</p>
        		</div>)}
      	</div>);
	}
}

Icon.defaultProps = {
	onOpen: function() { return; }
}

export default Icon;