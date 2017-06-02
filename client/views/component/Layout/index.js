import { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {

    componentDidMount() {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.appendIntoBody();
    }

    componentDidUpdate() {
        this.appendIntoBody();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.container);
        document.body.removeChild(this.container);
    }

    appendIntoBody() {
        ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.container);
    }

    render() {
        return null;
    }
}

export default Layout;
