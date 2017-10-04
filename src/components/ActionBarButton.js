import React, { Component } from 'react';
import './ActionBarButton.css';

class ActionBarButton extends Component {
    constructor(props) {
        super(props);
        this.toggleWindow = this.toggleWindow.bind(this);

        this.state = {
            visibility: true
        }
    }

    toggleWindow() {
        this.props.toggleWindow(this.state.visibility, this.props.name)
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render() {
        return (
            <div className="button" onClick={this.toggleWindow}>{this.props.name}</div>
        )
    }
}

export default ActionBarButton;