import React from 'react';
// import './App.css';

class CountrieCard extends React.Component {

  render() {

    const { countrie } = this.props
    

    return (
      <div>
        <img  src={ countrie.flag } alt={ countrie.name } />
        <div>
          <h4>{ countrie.name}</h4>
          <p>{ `Population: ${countrie.population}` }</p>
          <p>{ `Region: ${countrie.region}` }</p>
          <p>{ `Capital: ${countrie.capital}` }</p>
        </div>  
    </div>
     
    );
  }

    
}

export default CountrieCard;