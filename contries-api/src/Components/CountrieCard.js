import React from 'react';
import { Link } from 'react-router-dom';

class CountryCard extends React.Component {

  render() {

    const { country } = this.props
    

    return (
      <div className="card">
        <img  src={ country.flag } alt={ country.name } />
        <div>
          <h4>{ country.name}</h4>
          <p>{ `Population: ${country.population}` }</p>
          <p>{ `Region: ${country.region}` }</p>
          <p>{ `Capital: ${country.capital}` }</p>
          <Link className="link" to={ `/${country.name}` }>Ver Detalhes</Link>
        </div>  
      </div>
    );
  }

    
}

export default CountryCard;