import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <CountriesList></CountriesList>
      </div>
      {/* <Switch>
        <Route path="/book/:id" component={SingleBook} exact />
        <Route path="/" component={BookList} exact />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
