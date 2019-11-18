import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsConstructorType } from '@babel/types';






function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products}/>
    </div>
    
  );
}


class SearchBar extends React.Component {
  render() {
    return (
      <form >
      <input type="text"/> 
       <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
      </p>
      </form>

       
    )   
  }
}




class ProductTable extends React.Component {
  render() {
    const rows = [];
    var currentCategory = null;
    console.log(this.props.products);
    this.props.products.forEach(element => {
      console.log(element);
      if(element.category!=currentCategory){
        rows.push(
          <ProductCategoryRow category={element.category}/> 
        );
      }
      rows.push(
        <ProductRow products={element}/>
      );
      console.log(element.category);
      currentCategory = element.category;
    });
    console.log(rows);


    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )   
  }
}


class ProductCategoryRow extends React.Component {
  render(){
    console.log(this.props);
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render(){
    console.log(this.props);
    return (
      <tr>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.price}</td>
      </tr>
    )
  }
}





export default FilterableProductTable;
