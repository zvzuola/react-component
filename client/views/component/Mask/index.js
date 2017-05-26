import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const noop = () => { }
class Mask extends Component {
    render() {
        const { backgroundColor, transitionTimeOut, show, ...others } = this.props
        const style = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: backgroundColor
        }

        return (
            <ReactCSSTransitionGroup
                transitionAppear
                transitionAppearTimeout={transitionTimeOut}
                transitionEnter={false}
                transitionLeave
                transitionLeaveTimeout={transitionTimeOut}
                transitionName='modal'>
                {show ? <div style={style} {...others}></div> : null}
            </ReactCSSTransitionGroup>
        );
    }
}

Mask.defaultProps = {
    transitionTimeOut: 300,
    backgroundColor: 'rgba(0,0,0,0.5)',
    show: false
}

export default Mask;