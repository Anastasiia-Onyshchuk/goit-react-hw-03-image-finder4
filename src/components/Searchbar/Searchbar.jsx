import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm container">
          <label>
                      <button type="submit" className="SearchForm-button">
            <svg className="icon-search" width = "20px" height ="20px">
          <use href="./search-icon.svg#icon-search"></use>
              </svg>
            </button>  
                   </label>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            value={this.state.query}
            onChange={this.handleChange}
          /> 

        </form>
      </header>
    );
  }
}


   