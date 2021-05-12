import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountriesLibrary from '../pages/CountriesLibrary';
import CountryDetails from '../pages/CountryDetails';


function Content() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ CountriesLibrary } />
        <Route path="/:name" component={ CountryDetails } />
      </Switch>
    </main>
  );
}

export default Content;