import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Layout from '../Layout';
import Mask from '../Mask';
import './modal.css';

class Modal extends Component {
    render() {
        const { children, show, showMask, transitionTimeOut, className } = this.props;
        const style = {
            position: 'fixed',
            top: 0,
            left: show ? 0 : '-10000px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 900,
            transition: show
                ? '0ms left 0ms'
                : `0ms left ${transitionTimeOut}ms`
        }
        return (
            <Layout>
                <div>
                    <div style={style}>
                        <ReactCSSTransitionGroup
                            transitionName="modal"
                            component='div'
                            transitionAppear
                            transitionAppearTimeout={transitionTimeOut}
                            transitionEnter
                            transitionEnterTimeout={transitionTimeOut}
                            transitionLeave
                            transitionLeaveTimeout={transitionTimeOut}>
                            {show && <div className={className}>{children}</div>}
                        </ReactCSSTransitionGroup>
                    </div>
                    {showMask ? <Mask show={show} transitionTimeOut={transitionTimeOut} onClick={() => { }} /> : null}
                </div>
            </Layout>
        );
    }
}

Modal.defaultProps = {
    show: false,
    showMask: true,
    transitionTimeOut: 300
}

export default Modal;