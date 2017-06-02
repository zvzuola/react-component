import React from 'react';

class List extends React.PureComponent {

    render() {
        return (
            <div>
                {
                    this.props.list.map((list, index) => <li key={index}>{list.get('cnt')}</li>)
                }
            </div>
        );
    }
}

export default List;
