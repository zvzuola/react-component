import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Lists from '../component/list';
import { List, fromJS } from 'immutable';
import Modal from '../component/Modal';
import Tabs from '../component/Tab';
import TabPane from '../component/Tab/TabPane';

const URL = window.URL || window.webkitURL;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: fromJS([{ cnt: '1' }, { cnt: '2' }, { cnt: '3' }]),
            flag: false,
            selected: 0
        }
    }

    componentDidMount() {
    }

    addItem() {
        this.setState({
            list: this.state.list.push(fromJS({ cnt: Math.random() }))
        })
    }

    switchFlag() {
        this.setState({ flag: !this.state.flag });
    }

    componentWillUpdate() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.switchFlag() }}>{this.state.flag.toString()}</button>
                <button onClick={this.addItem.bind(this)}>添加</button>
                <Lists list={this.state.list} />
                {this.props.children}

                <Modal show={this.state.flag} className='m-modal'>
                    <div>Modal</div>
                    <button onClick={() => { this.switchFlag() }}>x</button>
                </Modal>

                <Tabs selected={this.state.selected} isToggle={this.state.flag}>
                    <TabPane label='tab 1'>
                        tab 1111
                    </TabPane>
                    <TabPane label='tab 2' disabled>
                        tab 2222
                    </TabPane>
                    <TabPane label='tab 3'>
                        tab 3333
                    </TabPane>
                </Tabs>

                <button onClick={() => this.setState({selected: null})}>收起</button>                

            </div>
        )
    }
}
let mapStateToProps = state => ({
    list: state.list
})
export default connect(mapStateToProps)(App);