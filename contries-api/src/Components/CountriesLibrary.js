import React from 'react';
// import './App.css';
import CountriesList from './CountriesList'


class CountriesLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      value: '',
      filter: true,
    }
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      countries: requestData,
    })
  }

  componentDidMount () {
    this.fetchCountries();
    
  }

  HandleChange = (event) => {
    this.setState({
      value: event.target.value,
      filter: false,
    })
  }


  HandleReturn = () => {
    const { countries, value } = this.state;

    const countriesFilter = countries.filter(countrie => countrie.name.includes(value))
    console.log(countriesFilter);

    if(this.state.filter === true) {
      <CountriesList contries={ countriesFilter } />
    }

    return <CountriesList contries={ countries } />
  }

  render() {
    // console.log(this.state);
    // const { countries } = this.state;
    return (
      <main>
        <input  onChange={ this.HandleChange }/>
        { this.HandleReturn() }
      </main>
    );
  }

    
}

export default CountriesLibrary;
