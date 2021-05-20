import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CountryDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      country: {},
      countries: [],
      loading: true,
    }
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      countries: requestData,
      loading: false,
    })
  }

  fetchCountry = async () => {
    const { match: { params: { name } } } = this.props;
    const requestReturn = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const requestData = await requestReturn.json();
    const objectData = requestData[0];
    this.setState({
      country: objectData,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchCountry();
    this.fetchCountries();
  }

  // handleBorderCoutries = () => {
  //   const { country, countries } = this.state;

  //   console.log(country.borders);
  //   console.log(bordercoutries);
      
  //   if(country.borders.length > 0) {

  //     const bordercoutries = country.borders
  //     .map((countryBorder) => countries.filter((country) =>{
        
  //       country.alpha3Code === countryBorder

  //       return (
  //         // <Link className="link" to={ `/${}` }>
  //         <Link key={ xmen.id }>
  //           <div className="border">{bordercoutries}</div>
  //         </Link>
  //       );
      
  //     }));
  //   }
  //   return <div className="border">None</div>
  // }

  render() {
    const { country, loading } = this.state;

    if(loading){
      return(
        <h2>loading</h2>
      )
    }

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
              <p>{`Currencies: ${country.currencies[0].name}`}</p>
              <p>{`Languages: ${country.languages.map((item) => item.name)}`}</p>
            </div>
          </div>
          
          <p>Border Countries:</p>
          {/* { this.handleBorderCoutries() } */}

          <button type="button">
            <Link class="link" to="/">Voltar</Link>
          </button>

        </div>

      </div>
        
    );
  }

    
}

export default CountryDetails;

