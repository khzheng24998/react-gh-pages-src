import React, { Component } from 'react';

class TimeComponent extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {time: new Date().toLocaleTimeString()};
	}

	render()
	{
    	return <div>{this.state.time}</div>;
  	}

  	componentDidMount() 
  	{
		this.interval = setInterval(() => this.setState({time: new Date().toLocaleTimeString()}), 1000);
	}

	componentWillUnmount() 
	{
		clearInterval(this.interval);
	}
}

export default TimeComponent;