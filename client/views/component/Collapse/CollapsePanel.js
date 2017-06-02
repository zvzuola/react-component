import React, { Component } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

class CollapsePanel extends Component {

    handlePanelClick() {
        if (this.props.onItemClick) {
            this.props.onItemClick();
        }
    }

    render() {
        const { header, children, isActive } = this.props;
        return (
            <div>
                <div onClick={this.handlePanelClick.bind(this)}>{header}</div>
                <div>
                    <VelocityTransitionGroup enter={{ animation: 'slideDown' }} leave={{ animation: 'slideUp' }}>
                        {isActive && children}
                    </VelocityTransitionGroup>
                </div>
            </div>
        );
    }
}

export default CollapsePanel;
