import React, { Component } from 'react';
import './ActionBar.css';
import ActionBarButton from './ActionBarButton'

class ActionBar extends Component {

    render() { return (
    		<div className="action-bar">
    			<ActionBarButton name="Trips"/>
				<svg className="handle" width="100%" height="50">
        			<rect width="100%" height="50" fill="#FFF" rx="0" ry="0"/>
        		</svg>
        	</div>
        );
    }
}

export default ActionBar;