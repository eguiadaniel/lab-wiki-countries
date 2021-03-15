import React, { Component } from 'react';
import './../App.css';
import countries from './../countries.json';

// import books from './../books.json';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  loadCountry() {
    const countryCode = this.props.match.params.cca3;
    const country = countries.find((country) => country.cca3 === countryCode);
    this.setState({
      country: country,
    });
  }

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('changed props match cca3');
    if (this.props.match.params.cca3 !== prevProps.match.params.cca3) {
      console.log(
        'componentDidUpdate was triggered by a change in the id being passed in the props obj'
      );
      this.loadCountry();
    }
  }

  
  render() {
    
    console.log('-------------------');
    console.log(this.state.country);
    const country = this.state.country;
    return (
       
        <div
          className="col-7"
          style={{ maxHeight: '90vh', overflowY: 'scroll' }}
        >
        {this.state.country && (

        <div>
        {/* <h1>{this.props.match.params.cca3}</h1> */}
        <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map(item =><li>{countries.find(country => country.cca3 === item).name.common}</li>)}
                      {/* <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li> */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>


        )}

      </div>
     
      
    );
  }
}

export default CountryDetails;

{
  /* <div className="col-7">
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
