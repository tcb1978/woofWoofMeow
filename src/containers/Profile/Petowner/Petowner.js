import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Bio from '../../../components/Bio/Bio';
import PetBio from '../../../components/Petowner/PetBio/PetBio';
import CareGiverSearch from '../../../components/Petowner/CareGiverSearch/CareGiverSearch';
import NewReview from '../../../components/NewReview/NewReview';
import Jobs from '../../../components/Jobs/Jobs';
import History from '../../../components/History/History';
// import Requests from '../../../components/Petowner/Requests/Requests';


export default class Petowner extends Component {
  render() {
    return (
      <Aux>
        <Bio logout={ this.props.logout }/>
        <PetBio />
        <CareGiverSearch />
        <Jobs />
        <History />
        <NewReview />
      </Aux>
    );
  }
}