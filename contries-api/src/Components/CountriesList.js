import React from 'react';
import CountryCard from './CountrieCard'

class CoutriesLibrary extends React.Component {

  render() {

    const { countries } = this.props

    return (
      <section className="flex">
        { countries.map((country) => <CountryCard key={ country.alpha3Code } country={ country } /> ) }
      </section>
    );
  }

    
}

export default CoutriesLibrary;