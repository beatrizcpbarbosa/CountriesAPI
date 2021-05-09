import React from 'react';
// import './App.css';
import CountriesList from './CountriesList'


class CountriesLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      value: '',
      // filter: false,
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
      // filter: true,
    })
  }


  // HandleReturn = () => {
  //   const { countries, value, filter } = this.state;

  //   const countriesFilter = countries.filter(countrie => countrie.name.includes(value))
  //   console.log(countriesFilter);

  //   // if(filter === true) {
  //   //   <CountriesList countries={ countriesFilter } />
  //   // }

  //   return <CountriesList countries={ countriesFilter } />
  // }

  render() {
    // console.log(this.state);
    const { countries, value } = this.state;
    const countriesFilter = countries.filter(countrie => countrie.name.includes(value))

    return (
      <main>
        <input onChange={ this.HandleChange }/>
        <CountriesList countries={ countriesFilter } />
      </main>
    );
  }

    
}

export default CountriesLibrary;
