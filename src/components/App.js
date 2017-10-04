import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './App.css';
import Dashboard from './Dashboard'
import ActionBar from './ActionBar'

class App extends Component {
	constructor(props) {
        super(props)
        this.toggleWindow = this.toggleWindow.bind(this)

        this.state = {
      		isTripsWindowVisible : true,
      		isMapWindowVisible : false,
      		isCalendarWindowVisible : false,
    	}
    }

	toggleWindow(visibility, windowName) {
		console.log(windowName)
		if (windowName == 'Trips') {
			this.setState({
				isTripsWindowVisible: !visibility
			})
		} else if (windowName == 'Map') {
			this.setState({
				isMapWindowVisible: !visibility
			})
		} else if (windowName == 'Calendar') {
			this.setState({
				isCalendarWindowVisible: !visibility
			})
		}
	}

	render() { return (
			<div>
			  <div>
			    <ActionBar toggleWindow={this.toggleWindow}/>
			    </div>
			  <div>
			  	<Dashboard isTripsWindowVisible={this.state.isTripsWindowVisible} 
			  	isMapWindowVisible={this.state.isMapWindowVisible} 
			  	isCalendarWindowVisible={this.state.isCalendarWindowVisible}/>
			  </div>
			</div>
		)
	}
}

export default App