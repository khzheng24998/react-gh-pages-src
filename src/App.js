import React, { Component } from 'react';
import Icon from './Icon';
import Window from './Window';
import TimeComponent from './Time';

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

const loginStyles = {
	height: 100,
	width: 250,
	position: "absolute",
	top: "45%",
	left: "5%",
	backgroundColor: "rgba(77, 0, 77, 0.6)",
	borderRadius: 4,
	boxShadow: "1px 1px 2px rgb(51, 0, 51)"
}

const loginButtonStyles = {
	height: 20,
	width: 210,
	border: "1px solid white",
	marginTop: 25,
	marginLeft: 15,
	paddingLeft: 5,
	color: "white",
	fontSize: 13,
	textAlign: "right",
	cursor: "pointer",
	backgroundColor: "rgb(51, 0, 51)"
}

const messageBoxStyles = {
	height: 220,
	width: 180,
	position: "absolute",
	bottom: "7%",
	right: "3%",
	backgroundColor: "white",
	borderRadius: 3,
	paddingRight: 14,
	paddingLeft: 14,
	paddingTop: 4
}

const message1 = "Hello! Wondering if you're in the right place? Yes, this is actually my personal website. I tried to make it a little bit different than most other personal websites that you see nowadays but I hope that the design doesn't come off as too tacky or unprofessional. Anyways, just click on 'Log In' to check out the rest of site!";

class App extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {};

		this.state.openWindows = [];

		this.state.loggedIn = false;
		this.state.showMessageBox = true;

		this.state.showAboutMe = false;
		this.state.showSkills = false;
		this.state.showProjects = false;
		this.state.showExperience = false;

		this.updateState = this.updateState.bind(this);
		this.handleWindowOpen = this.handleWindowOpen.bind(this);
		this.handleWindowClose = this.handleWindowClose.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleDismiss = this.handleDismiss.bind(this);
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
		let current = this.state.openWindows;
		current.push(name);
		this.setState({openWindows: current})

		const stateObject = this.updateState(name, true);
		this.setState(stateObject);
	}

	handleWindowClose(name)
	{
		const stateObject = this.updateState(name, false);
		this.setState(stateObject);
	}

	handleLogin() { this.setState({loggedIn: true}); }
	handleDismiss() { this.setState({showMessageBox: false}); }

	render()
	{
		return (
			<div>
				<img src='images/wallpaper.png' style={{width: "100%"}} />
      			<div style={{zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
					<div style={topBarStyles}><TimeComponent /></div>
					
					{!this.state.loggedIn && (
						<div>
							<div style={loginStyles}>
								<p style={{color: "white", fontSize: 13, paddingLeft: 15}}>Guest Session</p>
								<div style={loginButtonStyles} onClick={this.handleLogin}><p style={{position: "absolute", top: 43}}>Log In</p><img src="images/forwardarrow.png" height="20" /></div>
							</div>

							{this.state.showMessageBox && (
								<div style={messageBoxStyles}>
									<p style={{fontSize: 12}}>{message1}</p>
									<div style={{textAlign: "center"}}><button style={{cursor: "pointer"}} onClick={this.handleDismiss}>Dismiss</button></div>
									<img src="images/rightarrow.png" height="25" style={{position: "absolute", right: -20, bottom: 10}}/>
								</div>
							)}
						</div>
					)}

					{this.state.loggedIn && (
						<div>
							<Icon image="images/profile.png" name="About Me" fontColor="white" display="block" onOpen={this.handleWindowOpen} />
							<a href="resume.pdf" target="_blank"><Icon image="images/resume.png" name="Resume" fontColor="white" display="block" /></a>
							<Icon image="images/folder.png" name="Projects" fontColor="white" display="block" onOpen={this.handleWindowOpen} />
							<Icon image="images/folder.png" name="Experience" fontColor="white" display="block" onOpen={this.handleWindowOpen} />
							<Icon image="images/folder.png" name="Skills" fontColor="white" display="block" onOpen={this.handleWindowOpen} />
							<Icon image="images/folder.png" name="Coursework" fontColor="white" display="block" onOpen={this.handleWindowOpen} />

							{this.state.showAboutMe && <Window name="About Me" onClose={this.handleWindowClose} />}
							{this.state.showSkills && <Window name="Skills" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
							{this.state.showProjects && <Window name="Projects" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
							{this.state.showExperience && <Window name="Experience" onOpen={this.handleWindowOpen} onClose={this.handleWindowClose} />}
						</div>
					)}

				</div>
			</div>
		);
	}
}

export default App;