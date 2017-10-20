import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Perf from 'react-addons-perf';
import Lists from '../component/list';
import Modal from '../component/Modal';
import Tabs, { TabPane } from '../component/Tab';
import Collapse, { CollapsePanel } from '../component/Collapse';
import Switcher from '../component/Switcher';

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

    addItem() {
        this.setState({
            list: this.state.list.push(fromJS({ cnt: Math.random() }))
        });
    }

    updateObj() {
        const tempObj = this.state.tempObj;
        this.state.tempObj.push(3);
        this.setState({ tempObj });
        // Lists 组件不会更新，因为是pureComponent 而且tempObj引用地址没有更新
    }

    switchFlag() {
        this.setState({ flag: !this.state.flag });
    }

    render() {
        return (
            <div>
                <h1>测试组件</h1>
                <div>
                    <button onClick={this.addItem.bind(this)}>添加</button>
                    <button onClick={() => { this.updateObj(); }}>更新</button>
                    <Lists list={this.state.list} tempObj={this.state.tempObj} />
                </div>

                <h1>Modal组件</h1>
                <button onClick={() => { this.switchFlag(); }}>{this.state.flag ? '关闭弹框' : '打开弹框'}</button>
                <Modal show={this.state.flag} className="m-modal">
                    <div>Modal</div>
                    <button onClick={() => { this.switchFlag(); }}>x</button>
                </Modal>

                <h1>tab组件</h1>
                <button onClick={() => this.setState({ selected: null })}>收起</button>
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

                <h1>Collapse组件</h1>
                <Collapse accordion>
                    <CollapsePanel header={<span>collapse header 1</span>}>
                        <div>Collapse 1</div>
                    </CollapsePanel>
                    <CollapsePanel header={<span>collapse header 2</span>}>
                        <div>Collapse 2</div>
                    </CollapsePanel>
                </Collapse>

                <h1>Switcher组件</h1>
                <Switcher className="switcher" onChange={(checked) => { console.log(checked); }} />
                <Switcher className="switcher" disabled onChange={(checked) => { console.log(checked); }} />
                <Switcher className="switcher switcher-sm" onChange={(checked) => { console.log(checked); }} />

            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.list
});
export default connect(mapStateToProps)(App);
