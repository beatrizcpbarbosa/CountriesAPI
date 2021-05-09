import React from 'react';
// import './App.css';
import CountrieCard from './CountrieCard'

class CoutriesLibrary extends React.Component {

  render() {

    const { contries } = this.props
    // console.log(contries)

    return (
      <section >
        { contries.map((countrie) => <CountrieCard key={ countrie.alpha3Code } countrie={ countrie } /> ) }
      </section>
    );
  }

    
}

export default CoutriesLibrary;