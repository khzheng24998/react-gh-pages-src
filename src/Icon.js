import React, { Component } from 'react';

class Icon extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.state.image = "";
		this.handleIconClick = this.handleIconClick.bind(this);
	}

	handleIconClick()
	{
		const name = this.props.name;
		this.props.onOpen(name);
	}

	render()
	{
		return (<div style={{paddingLeft: 20, paddingTop: 10, paddingRight: 20, width: 60, display: this.props.display, textAlign: "center", verticalAlign: "top"}}>
        	<img src={this.props.image} height="50" width="50" style={{paddingBottom: 0, marginBottom: 0, cursor: "pointer"}} onClick={this.handleIconClick} />
        	<p style={{fontSize: 11, padding: 0, margin: 0, width: 60, color: this.props.fontColor}}>{this.props.name}</p>
      	</div>);
	}
}

Icon.defaultProps = {
	onOpen: function() { return; },
	fontColor: "black",
	display: "inline-block"
}

export default Icon;