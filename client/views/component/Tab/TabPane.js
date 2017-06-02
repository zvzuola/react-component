import React, { Component } from 'react';

class TabPane extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default TabPane;
