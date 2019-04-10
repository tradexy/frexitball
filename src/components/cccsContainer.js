import React from 'react';
import {CccList} from '../data/cccs';
import Ccc from './ccc';
import Cccs from './cccs';
import { Route} from 'react-router-dom';

const CccsContainer = (props) => {
    let cccUrl = CccList.map((ccc,i) => {
        return (
          <Route key={i} path={`/cccs/${ccc.url}`} render={() => <Ccc name={ccc.name} image={ccc.profile_img} details={ccc.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/cccs" render={() => <Cccs title="Cities and Stadia"/>} />
          {cccUrl}
          {/* <Route path="/cccs/hello" render={() => <Ccc />} /> */}
        </React.Fragment>
    );
}

export default CccsContainer;