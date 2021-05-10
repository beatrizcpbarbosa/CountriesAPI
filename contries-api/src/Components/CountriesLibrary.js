import React from 'react';
// import './App.css';
import CountriesList from './CountriesList'
// import FilterRegion from './FilterRegion'


class CountriesLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      value: '',
      filter: false,
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
      <main>
        <input placeholder='Search for a country...' onChange={ this.HandleChange }/>

        <select> Filter by Region
          <option name="all" onClick={ this.HandleSelectFilter }> All </option>
          <option name="Africa" onClick={ this.HandleSelectFilter }> Afríca </option>
          <option name="America" onClick={ this.HandleSelectFilter }> America </option>
          <option name="Asia" onClick={ this.HandleSelectFilter }> Asia </option>
          <option name="Europe" onClick={ this.HandleSelectFilter }> Europe </option>
          <option name="Oceania" onClick={ this.HandleSelectFilter }> Oceania </option>
       </select>

        {/* <FilterRegion countries={ countries } /> */}
        <CountriesList countries={ countriesFilter } />
      </main>
    );
  }

    
}

export default CountriesLibrary;
