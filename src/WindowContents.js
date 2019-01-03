import React, { Component } from 'react';
import Icon from './Icon';

const bioText1 = "Hello there! My name is Kenny Zheng and I am currently a junior pursuing my B.S. in Computer Science at the University of California, Los Angeles and an aspiring software engineer. I like to create interesting and/or impactful applications, whether that entails something practical, such as the online ordering system which I’m currently developing for my parents’ restaurant, or something simply for fun, such as a game (video games were a big part of my childhood). For me, it would be amazing to be able to do what I already do on the side as a full-time career!";
const bioText2 = "I often get asked what specific areas within the field of software engineering I would like to enter, which makes sense given that the field is so broad. To that question, I don’t really have an answer yet. At this point in my career, I’m not quite sure what I would like to do going forward (besides the general field of software engineering). I’ve been doing a lot of web development in recent months so I think that my current skillset would make me a good fit for a full stack position. I’m also well-versed in C/C++, which is helpful for a wide array of different positions. Admittedly, I don’t have much experience with machine learning, computer security, DevOps, or mobile development, but I would still be open to working within those areas. Who knows, maybe one of those disciplines is actually my hidden passion! At this point in my career, I think that I’m simply trying to test the waters and figure out what exactly I would like to do full-time. After all, exploring different career paths is what college is for!";
const projectText1 = " is an online ordering system that I'm currently developing for my parents' Chinese restuarant. While I still have a ways to go before I can deploy a fully functional and secure version of the system, I have thus far managed to create a user account system with standard features such as password reset and email verification. Future plans include updating the frontend to use a modern framework such as React, rewriting the code using TypeScript, and caching server data on the client side using HTML5 web storage."
const projectText2 = " is a school project for my Introduction to Computer Graphics course."

function Desktop(props)
{
	return (<div>
		<Icon image="images/profile.png" name="About Me" onOpen={props.onOpen} />
		<a href="resume.pdf" target="_blank"><Icon image="images/resume.png" name="Resume" /></a>
		<Icon image="images/folder.png" name="Projects" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Skills" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Experience" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Coursework" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Contact" onOpen={props.onOpen} />
	</div>);
}

function AboutMe(props)
{
	return (<div>
		<div style={{padding: 10, width: "35%", display: "inline-block"}}>
			<img src="images/profile.png" width="100%" />
			<div>
				<p style={{marginTop: 5, textDecoration: "underline"}}><strong>Fun Facts</strong></p>
				<ul style={{fontSize: 13, paddingLeft: 20, paddingRight: 5, listStyleType: "square"}}>
					<li>I grew up in Vernon, Connecticut.</li>
					<li>My favorite video game is Xenoblade Chronicles.</li>
					<li>My favorite musical artist is Logic.</li>
				</ul>
			</div>
		</div>
		<div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
			<p style={{fontSize: 13, marginTop: 8}}>{bioText1}</p>
			<p style={{fontSize: 13, marginTop: 8}}>{bioText2}</p>
		</div>
	</div>);
}

function Skills(props)
{
	return (<div>
		<Icon image="images/folder.png" name="Languages" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Libraries" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Databases" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Environments" onOpen={props.onOpen} />
		<Icon image="images/folder.png" name="Other" onOpen={props.onOpen} />
	</div>);
}

function Languages(props)
{
	return (<div>
		<Icon image="images/c.png" name="C" />
		<Icon image="images/cplusplus.png" name="C++" />
		<Icon image="images/html5.png" name="HTML" />
		<Icon image="images/css3.png" name="CSS" />
		<Icon image="images/javascript.png" name="JavaScript" />
		<Icon image="images/python.png" name="Python" />
		<Icon image="images/noimage.png" name="Verilog" />
	</div>);
}				

function Libraries(props)
{
	return (<div>
		<Icon image="images/react.png" name="React.js" />
		<Icon image="images/express.png" name="Express.js" />
		<Icon image="images/jquery.png" name="jQuery" />
		<Icon image="images/django.png" name="Django" />
	</div>);
}

function Databases(props)
{
	return (<div>
		<Icon image="images/mongodb.png" name="MongoDB" />
	</div>);
}

function Environments(props)
{
	return (<div>
		<Icon image="images/nodejs.png" name="Node.js" />
		<Icon image="images/linux.png" name="Linux" />
		<Icon image="images/unity.png" name="Unity" />
	</div>);
}

function Projects(props)
{
	return (<div>
		<Icon image="images/chinataste.png" name="China Taste" onOpen={props.onOpen}/>
		<Icon image="images/fishfarm.png" name="Fish Farm" onOpen={props.onOpen}/>
	</div>);
}

function ChinaTaste(props)
{
	return (<div>
		<div style={{padding: 15, width: "60%", display: "inline-block"}}>
			<img src="images/chinataste3.png" width="100%" />
		</div>
		<div style={{width: "30%", display: "inline-block", verticalAlign: "top", fontSize: 13, paddingRight: 10}}>
			<p style={{marginBottom: 4}}><strong>Name: </strong>China Taste</p>
			<p style={{marginBottom: 4}}><strong>URL: </strong>Coming soon</p>
			<p style={{marginBottom: 4}}><strong>Contributors: </strong>Kenny Zheng</p>
			<p style={{marginBottom: 4}}><strong>Technologies Used: </strong>HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express, MongoDB</p>
		</div>
		<div style={{padding: 0, paddingLeft: 18}}>
			<p style={{fontSize: 13, marginTop: 0, paddingRight: 10}}><strong>Description: </strong><i>China Taste</i>{projectText1}</p>
		</div>
	</div>);
}

function FishFarm(props)
{
	return (<div>
		<div style={{padding: 15, width: "60%", display: "inline-block"}}>
			<img src="images/chinataste3.png" width="100%" />
		</div>
		<div style={{width: "30%", display: "inline-block", verticalAlign: "top", fontSize: 13, paddingRight: 10}}>
			<p style={{marginBottom: 4}}><strong>Name: </strong>Fish Farm</p>
			<p style={{marginBottom: 4}}><strong>URL: </strong>Coming soon</p>
			<p style={{marginBottom: 4}}><strong>Contributors: </strong>Kenny Zheng, Ishan Sharma, Yeon Taek Jeong</p>
			<p style={{marginBottom: 4}}><strong>Technologies Used: </strong>HTML, CSS, JavaScript, jQuery, Bootstrap</p>
		</div>
		<div style={{padding: 0, paddingLeft: 18}}>
			<p style={{fontSize: 13, marginTop: 0, paddingRight: 10}}><strong>Description: </strong><i>Fish Farm</i>{projectText2}</p>
		</div>
	</div>);
}

export {Desktop, AboutMe, Skills, Languages, Libraries, Databases, Environments, Projects, ChinaTaste, FishFarm};