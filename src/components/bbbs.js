import React from 'react';
import {BbbList} from '../data/bbbs';
import { Link } from 'react-router-dom';

const Bbbs = (props) => {
    let bbbs = BbbList.map((bbb) => {
      return (
        <div className="bbb-container">
          <Link to={`/bbbs/${bbb.url}`}><div className="bbb-image" style={{ backgroundImage: "url(" + bbb.img_src + ")" }}></div></Link>
          <h3>{bbb.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {bbbs}
        </div>
      </div>
    );
}

export default Bbbs;