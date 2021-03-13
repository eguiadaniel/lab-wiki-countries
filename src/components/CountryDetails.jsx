import React, { Component } from 'react';
import './../App.css';

// import books from './../books.json';

class CountryDetails extends Component {
  state = {
    book: null,
  };

  // componentDidMount() {
  //   this.loadBoook();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('changed props match id');
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     console.log(
  //       'componentDidUpdate was triggered by a change in the id being passed in the props obj'
  //     );
  //     this.loadBoook();
  //   }
  // }

  // loadBoook() {
  //   const book = books.find((book) => book.id === this.props.match.params.id);
  //   this.setState({
  //     book: book,
  //   });
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.book && (
          <div>
            <h1>{this.state.book.name}</h1>
            <h3>{this.state.book.author}</h3>
            <span>Published on {this.state.book.date}</span>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
