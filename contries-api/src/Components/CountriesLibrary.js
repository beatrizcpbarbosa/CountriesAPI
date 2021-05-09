import React from 'react';
// import './App.css';

class CoutriesLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      contries: []
    }
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      contries: requestData,
    })
  }

  componentDidMount () {
    this.fetchCountries();
    
  }

  render() {
    console.log(this.state)
    return (
      <main>
        {/* <SearchBar />
        <Filter />
        <CountriesList /> */}
      </main>

    );
  }

    
}

export default CoutriesLibrary;
