import React from 'react';
import CountriesList from '../components/CountriesList'


class CountriesLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      value: '',
    }
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      countries: requestData,
      valueInput: '',
      valueSelect: '',
      filterSelect: false,
    })
  }

  componentDidMount () {
    this.fetchCountries();
    
  }

  HandleChangeInput = (event) => {
    this.setState({
      valueInput: event.target.value,
      filterSelect: false,
    })
  }


  HandleChangeSelect = (event) => {
    this.setState({
      valueSelect: event.target.value,
      filterSelect: true,
    })
  }

  HandleFilter = () => {
    const { countries, valueInput, valueSelect, filterSelect } = this.state;

    if(filterSelect === true) {
      const countriesSelect = countries.filter(country => country.region.includes(valueSelect));
      return <CountriesList countries={ countriesSelect } />
    }

    const countriesInput = countries.filter(country => country.name.includes(valueInput));
    return <CountriesList countries={ countriesInput} />
    
  }

  render() {
  
    return (
      <div>
        <div className="search-bar">
          
          <input placeholder='Search for a country...' onChange={ this.HandleChangeInput }/>

          <select onChange={this.HandleChangeSelect }>
            <option hidden>Filter by Region</option>
            <option value=""> All </option>
            <option value="Africa" > Afríca </option>
            <option value="America"> America </option>
            <option value="Asia" > Asia </option>
            <option value="Europe"> Europe </option>
            <option value="Oceania"> Oceania </option>
          </select>
        </div>
        

        { this.HandleFilter() }
      </div>
    );
  }

    
}

export default CountriesLibrary;
