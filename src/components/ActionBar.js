import React, { Component } from 'react';
import './ActionBar.css';
import ActionBarButton from './ActionBarButton'
import { toggleWindow } from '../actions/actionBarActions';

class ActionBar extends Component {
 	constructor(props) {
        super(props)
        this.clickButton = this.clickButton.bind(this)

    }

	clickButton(visibility, windowName) {
		this.props.toggleWindow(visibility, windowName)
    }

    render() { return (
    	    <div className="action-bar">
    			<div className="buttons">
    				<div className="status-circle" id="status-circle-pink"></div>
    				<ActionBarButton name="Trips" toggleWindow={this.clickButton}/>
    				<div className="status-circle" id="status-circle-orange"></div>
    				<ActionBarButton name="Map" toggleWindow={this.clickButton}/>
    				<div className="status-circle" id="status-circle-green"></div>
        			<ActionBarButton name="Calendar" toggleWindow={this.clickButton}/>
        		</div>
        	</div>
        )
    }
}

export default ActionBar;