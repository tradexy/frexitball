/* once an individual UK player is clicked, this page is activated, contains action photo
and description - short narrative of player. Copy into bbbContainer EU and stadiums ccc. */
import React from 'react';
import {AaaList} from '../data/aaas';
import Aaa from './aaa';
import Aaas from './aaas';
import { Route} from 'react-router-dom';
const AaasContainer = (props) => {
    let aaaUrl = AaaList.map((aaa,i) => {
        return (
          <Route key={i} path={`/aaas/${aaa.url}`} render={() => <Aaa name={aaa.name} 
          image={aaa.profile_img} details={aaa.description}/>} />
        );
      });
    return (
        <React.Fragment>
          <Route exact path="/aaas" render={() => 
          <Aaas title="United Kingdom Premier League Team"/>} />
          {aaaUrl}
          {/* <Route path="/aaas/hello" render={() => <Aaa />} /> */}
        </React.Fragment>
    );
}
export default AaasContainer;