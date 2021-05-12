import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CountryDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      country: {},
    }
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries = async () => {
    const { match: { params: { name } } } = this.props;
    console.log(this.props);
    const requestReturn = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const requestData = await requestReturn.json();
    const objectData = requestData[0];
    console.log(objectData);
    this.setState({
      country: objectData,
    })
  }

  componentDidMount () {
    this.fetchCountries();
    
  }

  render() {
    const { country } = this.state;
    console.log(country);

    return (
      <div>
        <img alt="Coutry Flag" src={ country.flag } />
        <h2>{ country.name }</h2>
        <button type="button">
        <Link to="/">Voltar</Link>
        </button>
      </div>
        
    );
  }

    
}

export default CountryDetails;