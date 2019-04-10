import React from 'react';
import {BbbList} from '../data/bbbs';
import Bbb from './bbb';
import Bbbs from './bbbs';
import { Route} from 'react-router-dom';

const BbbsContainer = (props) => {
    let bbbUrl = BbbList.map((bbb,i) => {
        return (
          <Route key={i} path={`/bbbs/${bbb.url}`} render={() => <Bbb name={bbb.name} image={bbb.profile_img} details={bbb.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/bbbs" render={() => <Bbbs title="European Union Premier League Team"/>} />
          {bbbUrl}
          {/* <Route path="/bbbs/hello" render={() => <Bbb />} /> */}
        </React.Fragment>
    );
}

export default BbbsContainer;