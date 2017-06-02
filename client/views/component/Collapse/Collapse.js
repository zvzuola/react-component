import React, { Component, Children } from 'react';
import CollapsePanel from './CollapsePanel';

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: []
        };
    }

    // componentWillReceiveProps(newProps) {
    //     // todo props设置activeKey
    //     if (newProps.activeKey !== this.props.activeKey) {
    //         this.setState({
    //             activeKey: []
    //         })
    //     }
    // }

    onClickItem(key) {
        let activeKey = this.state.activeKey;
        if (this.props.accordion) {
            activeKey = activeKey[0] === key ? [] : [key];
        } else {
            activeKey = [...activeKey];
            const index = activeKey.indexOf(key);
            const isActive = index > -1;
            if (isActive) {
                activeKey.splice(index, 1);
            } else {
                activeKey.push(key);
            }
        }
        this.setActiveKey(activeKey);
    }

    setActiveKey(activeKey) {
        // if (!('activeKey' in this.props)) {
        this.setState({ activeKey });
        // }
        // this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
    }

    getItems() {
        const activeKey = this.state.activeKey;
        const newChildren = [];

        Children.forEach(this.props.children, (child, index) => {
            if (!child) return;
            // If there is no key provide, use the panel order as default key
            const key = child.key || String(index);
            const { disabled } = child.props;
            let isActive = false;

            if (this.props.accordion) {
                isActive = activeKey[0] === key;
            } else {
                isActive = activeKey.indexOf(key) > -1;
            }

            const props = {
                key,
                isActive,
                onItemClick: disabled ? null : () => this.onClickItem(key)
            };

            newChildren.push(React.cloneElement(child, props));
        });

        return newChildren;
    }


    render() {
        return (
            <div>
                {this.getItems()}
            </div>
        );
    }
}

Collapse.CollapsePanel = CollapsePanel;
export default Collapse;
