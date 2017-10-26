import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


class DraggableMap extends Component {
	static defaultProps = {
	    center: {lat: 59.95, lng: 30.33},
	    zoom: 11
  	}

	render() { 
		return (
			<Draggable handle=".handle" defaultPosition={{x: Number(this.props.xPos), y: Number(this.props.yPos)}} position={null} grid={[50, 50]}
	    	onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
	    		<div id="handle" width="500" height="500">
	   				<GoogleMapReact
	   				 bootstrapURLKeys={{key: "AIzaSyA7F-pSE1g5X19zoOdDS00Y6mTXa8VoHIw"}} 
	   				 defaultCenter={this.props.center} 
	   				 defaultZoom={this.props.zoom}>
	   				</GoogleMapReact>
				</div>
	  		</Draggable>
	  	)
	}
}

export default DraggableMap;
