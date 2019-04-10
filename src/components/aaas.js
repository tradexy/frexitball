/* page containing UK squad, name and head photo of players. aaa=england. 
Copy into bbb.js (EU squad) and ccc. js - name and stadium photo */
import React from 'react';
import {AaaList} from '../data/aaas';
import { Link } from 'react-router-dom';
const Aaas = (props) => {
    let aaas = AaaList.map((aaa) => {
      return (
        <div className="aaa-container">
          <Link to={`/aaas/${aaa.url}`}><div className="aaa-image" 
          style={{ backgroundImage: "url(" + aaa.img_src + ")" }}></div></Link>
          <h3>{aaa.name}</h3>
        </div>
      );
    });
    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {aaas}
        </div>
      </div>
    );
}
export default Aaas;