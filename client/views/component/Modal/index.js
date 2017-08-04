import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Layout from '../Layout';
import Mask from '../Mask';
import './modal.css';

/**
 * Modal弹框层
 *
 * show: 是否显示弹框
 * transitionName: 动画名称
 * showMask: 是否显示遮罩
 * maskBackgroundColor: 遮罩背景色
 * maskClick: 点击遮罩事件
 * className: 弹框class
 *
 * @class Modal
 * @extends {Component}
 */
class Modal extends Component {
    render() {
        const { children, show, transitionName, transitionTimeOut, showMask, maskBackgroundColor, maskClick, className } = this.props;
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
        };
        return (
            <Layout style={style}>
                <div>
                    <div style={style}>
                        <ReactCSSTransitionGroup
                          transitionName={transitionName}
                          component="div"
                          transitionAppear
                          transitionAppearTimeout={transitionTimeOut}
                          transitionEnter
                          transitionEnterTimeout={transitionTimeOut}
                          transitionLeave
                          transitionLeaveTimeout={transitionTimeOut}
                        >
                            {show && <div className={className}>{children}</div>}
                        </ReactCSSTransitionGroup>
                    </div>
                    {showMask
                        ? <Mask
                          show={show}
                          transitionName={transitionName}
                          transitionTimeOut={transitionTimeOut}
                          backgroundColor={maskBackgroundColor}
                          onClick={maskClick}
                        />
                        : null
                    }
                </div>
            </Layout>
        );
    }
}

Modal.defaultProps = {
    show: false,
    transitionName: 'modal',
    transitionTimeOut: 300,
    showMask: true,
    maskBackgroundColor: 'rgba(0,0,0,0.5)',
    maskClick: () => {}
};

export default Modal;
