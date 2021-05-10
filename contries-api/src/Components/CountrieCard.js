import React from 'react';
// import './App.css';

class CountryCard extends React.Component {

  render() {

    const { country } = this.props
    

    return (
      <div>
        <img  src={ country.flag } alt={ country.name } />
        <div>
          <h4>{ country.name}</h4>
          <p>{ `Population: ${country.population}` }</p>
          <p>{ `Region: ${country.region}` }</p>
          <p>{ `Capital: ${country.capital}` }</p>
        </div>  
    </div>
     
    );
  }

    
}

export default CountryCard;