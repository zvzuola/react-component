import React, { Component, PropTypes } from 'react';

class List extends React.PureComponent {
    
    render() {
        return (
            <div>
                {
                    this.props.list.map((list, index) => {
                        return <li key={index}>{list.get('cnt')}</li>
                    })
                }
            </div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired
};

export default List;