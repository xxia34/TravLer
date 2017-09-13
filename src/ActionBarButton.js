import React, { Component } from 'react';
import './ActionBarButton.css';

class ActionBarButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.name);
    }

    render() {
        return (
            <div className="button" onClick={this.handleClick}>{this.props.name}</div>
        );
    }
}

export default ActionBarButton;