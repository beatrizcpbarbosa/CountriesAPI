import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CountryDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      country: {},
      countries: [],
    }
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      countries: requestData,
    })
  }

  fetchCountry = async () => {
    const { match: { params: { name } } } = this.props;
    console.log(this.props);
    const requestReturn = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const requestData = await requestReturn.json();
    const objectData = requestData[0];
    console.log(objectData);
    console.log(requestData);
    this.setState({
      country: objectData,
    })
  }

  componentDidMount() {
    this.fetchCountry();
    this.fetchCountries();
  }

  handleBorderCoutries = () => {
    // const { country, countries } = this.state;
    // const array = country.borders
    // console.log(array);

    // const borders = country.borders.map((border) => {
    //     countries.filter((country) => country.alpha3Code === border);
    // });
    // console.log(borders)
    
      
    // array.map((item) => item.alpha3Code === 
    
    return <Link to="">

    </Link>
  }

  render() {
    const { country } = this.state;
    const { currencies } = country
    console.log(country.borders);
    console.log(country.currencies);
    console.log(country.languages);

    // const a = country.currencies;
    // const b = [...currencies];
    console.log(currencies)

    // const currencies = country.currencies
    // const moeda = currencies.forEach(item => item.name);
    // console.log(moeda);

    // const arrayLinguas = country.languages;
    // const linguas = arrayLinguas.forEach((item) => item.name);
    // const moeda = country.currencies;


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
              <p>{`Currencies: ${country.currencies}`}</p>
              <p>{`Languages: ${country.languages}`}</p>
            </div>
          </div>
          
          <p>Border Countries:</p>

          <button type="button">
            <Link class="link" to="/">Voltar</Link>
          </button>

        </div>

      </div>
        
    );
  }

    
}

export default CountryDetails;

