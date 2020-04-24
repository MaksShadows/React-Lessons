import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {

    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


export default FilterableProductTable;