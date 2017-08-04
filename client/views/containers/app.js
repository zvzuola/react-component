import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Lists from '../component/list';
import Modal from '../component/Modal';
import Tabs, { TabPane } from '../component/Tab';
import Collapse, { CollapsePanel } from '../component/Collapse';
import Switcher from '../component/Switcher';
import Perf from 'react-addons-perf';
window.Perf = Perf;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: fromJS([{ cnt: '1' }, { cnt: '2' }, { cnt: '3' }]),
            flag: false,
            selected: 0,
            tempObj: [1, 2]
        };
    }

    componentDidMount() {
    }

    addItem() {
        this.setState({
            list: this.state.list.push(fromJS({ cnt: Math.random() }))
        });
    }

    switchFlag() {
        this.setState({ flag: !this.state.flag });
    }

    componentWillUpdate() {
    }

    updateObj() {
        let tempObj = this.state.tempObj
        this.state.tempObj.push(3)
        this.setState({ tempObj })
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.switchFlag(); }}>{this.state.flag.toString()}</button>
                <button onClick={this.addItem.bind(this)}>添加</button>
                <Lists list={this.state.list} tempObj={this.state.tempObj} />
                {this.props.children}

                <button onClick={() => { this.updateObj() }}>更新</button>

                <Modal show={this.state.flag} className="m-modal">
                    <div>Modal</div>
                    <button onClick={() => { this.switchFlag(); }}>x</button>
                </Modal>

                <Tabs selected={this.state.selected} className="nav nav-tabs">
                    <TabPane label="tab 1">
                        tab 1111
                    </TabPane>
                    <TabPane label="tab 2" disabled>
                        tab 2222
                    </TabPane>
                    <TabPane label="tab 3">
                        tab 3333
                    </TabPane>
                </Tabs>

                <Tabs selected={this.state.selected} className="nav nav-slides">
                    <TabPane label="tab 1">
                        tab 1111
                    </TabPane>
                    <TabPane label="tab 2" disabled>
                        tab 2222
                    </TabPane>
                    <TabPane label="tab 3">
                        tab 3333
                    </TabPane>
                </Tabs>

                <button onClick={() => this.setState({ selected: null })}>收起</button>

                <Collapse accordion>
                    <CollapsePanel header={<span>collapse header 1</span>}>
                        <div>Collapse 1</div>
                    </CollapsePanel>
                    <CollapsePanel header={<span>collapse header 2</span>}>
                        <div>Collapse 2</div>
                    </CollapsePanel>
                </Collapse>

                <Switcher className='switcher' onChange={(checked) => { console.log(checked) }} />
                <Switcher className='switcher' disabled onChange={(checked) => { console.log(checked) }} />
                <Switcher className='switcher switcher-sm' onChange={(checked) => { console.log(checked) }} />

                <Test />

            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.list
});
export default connect(mapStateToProps)(App);

class Test extends React.Component {
    componentDidMount() {
        console.log('did mount');
    }
    render() {
        return null;
    }
}
