import React, { Component } from 'react';
import classNames from 'classnames';

const noop = () => { };
class Switcher extends Component {

    constructor(props) {
        super(props);
        const checked = !!props.checked;
        this.state = {
            checked
        };
    }

    setChecked(checked) {
        this.setState({
            checked
        });
        this.props.onChange(checked);
    }

    toggle() {
        const checked = !this.state.checked;
        this.setChecked(checked);
    }

    render() {
        const { className, disabled,
            checkedChildren, unCheckedChildren, ...restProps } = this.props;
        const checked = this.state.checked;
        const switcherClasses = classNames({
            [className]: !!className,
            'checked': checked,
            'disabled': disabled
        });
        return (
            <span
              {...restProps}
              className={switcherClasses}
              onClick={disabled ? noop : this.toggle.bind(this)}
            >
                <span className={'inner'}>
                    {checked ? checkedChildren : unCheckedChildren}
                </span>
            </span>
        );
    }
}

Switcher.defaultProps = {
    checkedChildren: '开',
    unCheckedChildren: '关',
    className: '',
    checked: false,
    onChange: noop
};

export default Switcher;
