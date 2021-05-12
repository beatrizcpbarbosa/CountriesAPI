import React from 'react';
import CountriesList from '../components/CountriesList'
import FilterRegion from '../components/FilterRegion';


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
      filter: true,
    })
  }

  HandleSelectFilter = (event) => {
    const { countries, filter } = this.state;
    const name = event.target.name;
    this.setState({
      filter: true,
    })
    const countriesFilterRegion = countries.filter(country => country.region.includes(name))

    if(filter === true) return  <CountriesList countries={ countriesFilterRegion } />
     
  }


  render() {
    // console.log(this.state);
    const { countries, value } = this.state;
    const countriesFilter = countries.filter(country => country.name.includes(value))
    console.log(countriesFilter);

    return (
      <div>
        <input placeholder='Search for a country...' onChange={ this.HandleChange }/>
        <FilterRegion />

        <CountriesList countries={ countriesFilter } />
      </div>
    );
  }

    
}

export default CountriesLibrary;
