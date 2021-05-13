import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CountryDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      country: {},
    }
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries = async () => {
    const { match: { params: { name } } } = this.props;
    console.log(this.props);
    const requestReturn = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const requestData = await requestReturn.json();
    const objectData = requestData[0];
    console.log(objectData);
    this.setState({
      country: objectData,
    })
  }

  componentDidMount () {
    this.fetchCountries();
    
  }

  // handleBorderCoutries = () => {
  //   const { country } = this.state;
  //   const array = country.borders
  //   console.log(array);
    
  //   array.map((item) => item.alpha3Code === 
    
    
  // }

  render() {
    const { country } = this.state;
    console.log(country);

    // const currencies = country.currencies;
    // console.log(currencies);

    // const arrayLinguas = country.languages;
    // const linguas = arrayLinguas.map((item) => item.name);
    // console.log(arrayLinguas);


    return (
      <div className="flex country-page">
        <img alt="Coutry Flag" src={ country.flag } />

        <div className="content">
          <h2>{ country.name }</h2>

          <div className="flex info">
          
          <div>
              <p>{`Native Name: ${country.nativeName}`}</p>
              <p>{`Population: ${country.population}`}</p>
              <p>{`Region: ${country.region}`}</p>
              <p>{`Subregion: ${country.subregion}`}</p>
              <p>{`Capital: ${country.capital}`}</p>
            </div>

            <div>
              <p>{`Top Level Domain: ${country.topLevelDomain}`}</p>
              {/* <p>{`Currencies: ${country.currencies[0].name}`}</p> */}
              <p>{`Languages: `}</p>
            </div>
        </div>
          
          <p>Border Countries:</p>


          <button type="button">
            <Link to="/">Voltar</Link>
          </button>
        </div>

      </div>
        
    );
  }

    
}

export default CountryDetails;

