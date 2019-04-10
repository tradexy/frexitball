import React from 'react';
import {CccList} from '../data/cccs';
import { Link } from 'react-router-dom';

const Cccs = (props) => {
    let cccs = CccList.map((ccc) => {
      return (
        <div className="Ccc-container">
          <Link to={`/cccs/${ccc.url}`}><div className="ccc-image" style={{ backgroundImage: "url(" + ccc.img_src + ")" }}></div></Link>
          <h3>{ccc.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {cccs}
        </div>
      </div>
    );
}

export default Cccs;
          