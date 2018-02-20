import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import PetBio from '../../../components/PetBio/PetBio';
import CareGiverSearch from '../../../components/CareGiverSearch/CareGiverSearch';
import Requests from '../../../components/Requests/Requests';

export default class Petowner extends Component {
  render() {
    return (
      <Aux>
        <PetBio />
        <CareGiverSearch />
        <Requests />
      </Aux>
    );
  }
}