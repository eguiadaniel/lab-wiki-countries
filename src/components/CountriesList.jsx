import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './../components/CountryDetails';

import './../App.css';
import countries from './../countries.json';

class CountriesList extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      
        
          <div
            className="d-flex flex-row"
            style={{ maxHeight: '70vh', overflowY: 'scroll' }}
          >
            <div className="list-group">
              {this.state.countries.map((country) => (
                <Link
                  className="list-group-item list-group-item-action"
                  key={country.cca3}
                  to={`/${country.cca3}`}
                >
                <img src={`https://www.countryflags.io/${country.cca2}/flat/16.png`} alt={country.name.common}/>
                  {/* <small>{country.cca3}</small> */}
                  {` ${country.name.common}`}
                </Link>
              ))}
            </div>
          </div>          
        
      
    );
  }
}

export default CountriesList;

// <div className="container">
//     <div className="row">
//         <div className="col-5" style="max-height: 90vh; overflow: scroll">
//       <div className="list-group">
//         <a className="list-group-item list-group-item-action" href="/ABW"
//           >🇦🇼 Aruba</a
//         >
