import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'react-redux';
import './Dashboard.css';
import DraggableMap from './DraggableMap';

class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      isTripsWindowVisible : true,
      isMapWindowVisible : false,
      isCalendarWindowVisible : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isTripsWindowVisible: nextProps.isTripsWindowVisible,
      isMapWindowVisible: nextProps.isMapWindowVisible,
      isCalendarWindowVisible: nextProps.isCalendarWindowVisible,
    })
  }

  render() { 
    return (
      <div>
        {this.state.isTripsWindowVisible && <DraggableWindow xPos="0" yPos="0" fill="#ccc" width="300" height="300"></DraggableWindow>}
        {this.state.isMapWindowVisible && <DraggableMap xPos="500" yPos="0" fill="#555" width="650" height="650"></DraggableMap>}
        {this.state.isCalendarWindowVisible && <DraggableWindow xPos="0" yPos="50" fill="#999" width="300" height="300"></DraggableWindow>}
      </div>
    )
  }
}

class DraggableWindow extends Component {
  render() {
   return (
      <Draggable handle=".handle" defaultPosition={{x: Number(this.props.xPos), y: Number(this.props.yPos)}} position={null} grid={[50, 50]}
      onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
        <svg className="handle" width={this.props.width} height={this.props.height}>
        <rect width="500" height="500" fill={this.props.fill} rx="0" ry="0"></rect></svg>
      </Draggable>
    )
  }
}

export default Dashboard;
