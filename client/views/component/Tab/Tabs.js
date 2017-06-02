import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TabPane from './TabPane';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };
    }

    _getTabHeaders() {
        const { children, className } = this.props;
        const labels = children.map((child, index) => {
            const active = this.state.selected === index;
            const disabled = child.props.disabled;
            const props = {};
            if (!disabled) { props.onClick = this.handleLabelClick.bind(this, index); }

            const labelClasses = classNames({
                'z-crt': active,
                'z-dis': disabled
            });

            return (
                <li
                  key={index}
                  className={labelClasses}
                >
                    <a
                      href="javascript:;"
                      {...props}
                    >{child.props.label}</a>
                </li>
            );
        });
        return (
            <ul className={className}>{labels}</ul>
        );
    }

    _getTabContent() {
        return (
            <div>{this.props.children[this.state.selected]}</div>
        );
    }

    handleLabelClick(index) {
        if (this.state.selected === index && this.props.isToggle) { this.setState({ selected: null }); } else { this.setState({ selected: index }); }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selected !== this.state.selected) { this.setState({ selected: nextProps.selected }); }
    }


    render() {
        return (
            <div>
                {this._getTabHeaders()}
                {this._getTabContent()}
            </div>
        );
    }
}

Tabs.propTypes = {
    selected: PropTypes.number,
    isToggle: PropTypes.bool
};

Tabs.defaultProps = {
    selected: 0,
    isToggle: false
};

Tabs.TabPane = TabPane;

export default Tabs;
