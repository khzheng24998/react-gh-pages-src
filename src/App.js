import React, { Component } from 'react';
import Icon from './Icon';
import Window from './Window';

const topBarStyles = {
	height: 20,
	backgroundColor: "#5f5f5f",
	boxShadow: "0px 1px 5px #262626",
	textAlign: "right",
	color: "white",
	fontSize: 11,
	fontWeight: 600,
	paddingRight: 10,
	paddingTop: 4
}

const taskBarStyles = {
	height: "100%",
	width: 55,
	backgroundColor: "white",
	display: "inline-block",
	backgroundColor: "rgba(102, 0, 51, 0.5)",
	marginTop: 2,
	textAlign: "center"
}

class App extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.state.showAboutMe = false;
		this.state.showSkills = false;
		this.state.showProjects = false;
		this.state.showResume = false;
		this.state.showContact = false;
		this.state.showLanguages = false;
		this.state.showLibraries = false;
		this.state.showDatabases = false;
		this.state.showEnvironments = false;
		this.state.showOther = false;

		this.state.showChinaTaste = false;
		this.state.showFishFarm = false;

		this.updateState = this.updateState.bind(this);
		this.handleWindowOpen = this.handleWindowOpen.bind(this);
		this.handleWindowClose = this.handleWindowClose.bind(this);
	}

	updateState(name, bool)
	{
		const key = "show" + name.replace(/\s/g, '');
		let returnObj = {};
		returnObj[key] = bool;
		return returnObj;
	}

	handleWindowOpen(name)
	{
		const stateObject = this.updateState(name, true);
		this.setState(stateObject);
	}

	handleWindowClose(name)
	{
		const stateObject = this.updateState(name, false);
		this.setState(stateObject);
	}

	render()
	{
		const d = new Date();
		let hours = d.getHours() % 12;
		let minutes = d.getMinutes();
		let period = (d.getHours() >= 12) ? "PM" : "AM";

		if (hours === 0)
			hours = 12;
		if (minutes < 10)
			minutes = "0" + minutes;

		const dateString = hours + ":" + minutes + " " + period;

		return (
			<div>
				<img src='images/wallpaper.jpg' style={{width: "100%"}} />
      			<div style={{zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
					<div style={topBarStyles}>{dateString}</div>
					<div style={{display: "inline-block", verticalAlign: "top"}}>
						<Icon image="images/folder.png" name="About Me" fontColor="white" onOpen={this.handleWindowOpen} />
						<Icon image="images/folder.png" name="Projects" fontColor="white" onOpen={this.handleWindowOpen} />

						<Icon image="images/folder.png" name="Skills" fontColor="white" onOpen={this.handleWindowOpen} />
						<a href="resume.pdf" target="_blank"><Icon image="images/resume.png" name="Resume" fontColor="white" /></a>

						{this.state.showAboutMe && <Window name="About Me" onClose={this.handleWindowClose} />}

						{this.state.showSkills && <Window name="Skills" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showLanguages && <Window name="Languages" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showLibraries && <Window name="Libraries" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showDatabases && <Window name="Databases" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showEnvironments && <Window name="Environments" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showOther && <Window name="Other" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}

						{this.state.showProjects && <Window name="Projects" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						{this.state.showChinaTaste && <Window name="China Taste" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}

					</div>

				</div>
			</div>
		);
	}
}

export default App;