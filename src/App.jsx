import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import axios from 'axios'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
      <div className="row" style={{flexWrap: 'nowrap'}}>
          <CountriesList countries={countries} />
          
          <Switch>
            <Route path="/:cca3" component={CountryDetails} exact />
          </Switch>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
