import React from 'react';
import { Link } from 'react-router-dom';

class CountryCard extends React.Component {

  render() {
    const { country } = this.props

    return (
        <div className="card">
          <Link className="link" to={ `/${country.name}` }>

            <div className="img-cover">
              <img  src={ country.flag } alt={ country.name } />
            </div>
            
            <div className="content-card">
              <h4>{ country.name }</h4>
              <p>{ `Population: ${country.population}` }</p>
              <p>{ `Region: ${country.region}` }</p>
              <p>{ `Capital: ${country.capital}` }</p>
            </div>  

          </Link>
      </div>
    );
  } 
}

export default CountryCard;