import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './Dashboard.css';

class Dashboard extends Component {
  constructor () {
    super()
    this.toggleWindow = this.toggleWindow.bind(this);

    this.state = {
      tripsWindowVisible : true,
      mapWindowVisible : false,
      calendarTripWindowVisible : false,
    }
  }
  
  toggleWindow () {
    this.setState({
      isTripsWindowHidden: !this.state.tripsWindowVisible
    })
  }
  render() { 
    return (
      <div>
        {this.state.tripsWindowVisible && <DraggableWindow />}
      </div>
    );
  }
}

const DraggableWindow = () => (
  <Draggable handle=".handle" defaultPosition={{x: 0, y: 0}} position={null} grid={[50, 50]}
  onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
    <svg className="handle" width="500" height="500">
    <rect width="500" height="500" fill="#ccc" rx="0" ry="0"></rect></svg>
  </Draggable>
);

export default Dashboard;
