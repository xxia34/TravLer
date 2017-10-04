class DraggableMap extends Component {
  render() {
    <Draggable handle=".handle" defaultPosition={{x: Number(this.props.xPos), y: Number(this.props.yPos)}} position={null} grid={[50, 50]}
      onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
        <svg className="handle" width="500" height="500">
        <rect width="500" height="500" fill={this.props.fill} rx="0" ry="0"></rect></svg>
      </Draggable>
  }
}

export default DraggableMap;
