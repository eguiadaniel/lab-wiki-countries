import React, { Component } from 'react';
import './../App.css';

// import books from './../books.json';

class CountryDetails extends Component {
  state = {
    country: null,
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
    const params = this.props.match.params.cc3;
    console.log('-------------------');
    console.log(this.props);
    return (
      <div className="col-7">
        <h1>Hello {this.props.match.params.cc3}</h1>
      </div>
    );
  }
}

export default CountryDetails;

{
  /* <div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */
}
