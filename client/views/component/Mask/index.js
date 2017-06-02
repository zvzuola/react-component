import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Mask extends Component {
    render() {
        const { backgroundColor, transitionTimeOut, show, transitionName, ...others } = this.props;
        const style = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor
        };

        return (
            <ReactCSSTransitionGroup
              transitionAppear
              transitionAppearTimeout={transitionTimeOut}
              transitionEnter={false}
              transitionLeave
              transitionLeaveTimeout={transitionTimeOut}
              transitionName={transitionName}
            >
                {show ? <div style={style} {...others}></div> : null}
            </ReactCSSTransitionGroup>
        );
    }
}

Mask.defaultProps = {
    transitionTimeOut: 300,
    backgroundColor: 'rgba(0,0,0,0.5)',
    show: false,
    transitionName: 'modal'
};

export default Mask;
