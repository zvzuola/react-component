import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Lists from '../component/list';
import { List, fromJS } from 'immutable';
import Modal from '../component/Modal';

const URL = window.URL || window.webkitURL;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: fromJS([{ cnt: '1' }, { cnt: '2' }, { cnt: '3' }]),
            flag: false
        }
    }

    componentDidMount() {
    }

    addItem() {
        this.setState({
            list: this.state.list.push(fromJS({ cnt: Math.random() }))
        })
        console.log()
    }

    switchFlag() {
        this.setState({ flag: !this.state.flag }, () => { console.log(0, this.state.flag) });
        console.log(1, this.state.flag)
    }

    componentWillUpdate() {
        console.log(2, this.state.flag);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(3, this.state.flag)
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.switchFlag() }}>{this.state.flag.toString()}</button>
                <button onClick={this.addItem.bind(this)}>添加</button>
                <Lists list={this.state.list} />
                {this.props.children}
                <Notupdate>
                    <Notupdatechild flag={this.state.flag.toString()} />
                </Notupdate>

                <Modal show={this.state.flag} className='modal'>
                    <div>Modal</div>
                    <button onClick={() => { this.switchFlag() }}>x</button>
                </Modal>

            </div>
        )
    }
}
let mapStateToProps = state => ({
    list: state.list
})
export default connect(mapStateToProps)(App);

class Notupdate extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    // return false;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, this.props)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class Notupdatechild extends React.Component {
    render() {
        return (
            <div>
                {this.props.flag}
            </div>
        );
    }
}