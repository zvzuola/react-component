import React from 'react';

class List extends React.PureComponent {

    componentDidUpdate(prevProps, prevState) {
        console.log('updated');
    }

    render() {
        return (
            <div>
                {
                    this.props.list.map((list, index) => <li key={index}>{list.get('cnt')}</li>)
                }
                {
                    this.props.tempObj
                }
            </div>
        );
    }
}

export default List;
