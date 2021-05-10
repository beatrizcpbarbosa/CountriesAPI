import React from 'react';
// import './App.css';
import CountryCard from './CountrieCard'

class CoutriesLibrary extends React.Component {

  render() {

    const { countries } = this.props
    // console.log(contries)

    return (
      <section >
        { countries.map((country) => <CountryCard key={ country.alpha3Code } country={ country } /> ) }
      </section>
    );
  }

    
}

export default CoutriesLibrary;