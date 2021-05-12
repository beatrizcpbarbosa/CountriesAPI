import React from 'react';

class FilterRegion extends React.Component {

  render() {

    const {  } = this.props
    

    return (
      <select> Filter by Region
          <option name="all" onClick={ this.HandleSelectFilter }> All </option>
          <option name="Africa" onClick={ this.HandleSelectFilter }> Afríca </option>
          <option name="America" onClick={ this.HandleSelectFilter }> America </option>
          <option name="Asia" onClick={ this.HandleSelectFilter }> Asia </option>
          <option name="Europe" onClick={ this.HandleSelectFilter }> Europe </option>
          <option name="Oceania" onClick={ this.HandleSelectFilter }> Oceania </option>
       </select>
     
    );
  }

    
}

export default FilterRegion;