import React, { Component, PropTypes } from 'react';

class TabPane extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

TabPane.defaultProps = {
    label: ''
}

TabPane.propTypes = {
    label: PropTypes.string.isRequired
};

export default TabPane;