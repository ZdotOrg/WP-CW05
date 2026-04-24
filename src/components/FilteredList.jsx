import React, { Component } from 'react';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: 'All' };
    }

    handleFilterChange = (e) => {
        this.setState({ filter: e.target.value });
    }

    render() {
        const filteredItems = this.props.items.filter(item => {
            if (this.state.filter === 'All') return true;
            return item.type === this.state.filter;
        });

        return (
            <div>
                <h2>Filtered List</h2>
                <select onChange={this.handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}>{item.name} - {item.type}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;