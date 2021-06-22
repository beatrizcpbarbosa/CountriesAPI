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
      loadingC: true,
    }
  }

  fetchCountries = async () => {
    const requestReturn = await fetch('https://restcountries.eu/rest/v2/all');
    const requestData = await requestReturn.json();
    this.setState({
      countries: requestData,
      loadingC: false,
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

  handleBorderCoutries = () => {
    const { country, countries, loadingC} = this.state;
    const bordercoutries = country.borders;

    if(loadingC) {
      return <div>none</div>
    }

    const arrayCountries = bordercoutries.map((border) => {
      return countries.filter((country) => country.alpha3Code === border);
    }); // retorna um array de arrays
    
    const objetoCoutries = arrayCountries.map((array) => array[0]);
    console.log(objetoCoutries) // retorna um array de objetos
    
    const linksBordes = objetoCoutries.map((country) => {
      console.log(country)
      return <button><Link class="link" to={ `/${country.name }` }> { country.name } </Link></button>
    })  
    
    return linksBordes;

  }



  render() {
    const { country, loading } = this.state;
  
    if(loading){
      return(
        <h2>loading</h2>
      )
    }

    return (
      <div>

        <div className="flex country-page">
          <img alt="Coutry Flag" src={ country.flag } />   

          <div className="content">
            <h2>{ country.name }</h2>

            <div className="info">
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
            
            <div> 
              <p>Border Countries:</p>
              { this.handleBorderCoutries() }
            </div>

            <button type="button" className="voltar">
              <Link class="link" to="/">Voltar</Link>
            </button>
        </div>
        </div>

        

      </div>   
    );
  }

    
}

export default CountryDetails;

