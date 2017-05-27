import React, { Component, PropTypes } from 'react';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    _getTabHeaders() {
        const { children } = this.props;
        let labels = children.map((child, index) => {
            let active = this.state.selected === index ? 'z-crt' : '';
            return (
                <li key={index}>
                    <a href='javascript:;'
                        className={active}
                        onClick={this.handleLabelClick.bind(this, index)}>{child.props.label}</a>
                </li>
            )
        })
        return (
            <ul>{labels}</ul>
        )
    }

    _getTabContent() {
        return (
            <div>{this.props.children[this.state.selected]}</div>
        )
    }

    handleLabelClick(index) {
        if (this.state.selected === index && this.props.isToggle)
            this.setState({ selected: null });
        else
            this.setState({ selected: index });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selected !== this.state.selected)
            this.setState({ selected: nextProps.selected });
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
}

export default Tabs;