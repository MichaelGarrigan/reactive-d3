
import React from 'react';
import propTypes from 'prop-types';
import './Module.css';

const Module = ({title, subs}) => {

  Module.propTypes = {
    title: propTypes.string,
    subs: propTypes.array
  };

  return (
    <div className="module-wrapper">
      <div className="module-header">
        <h2 className="module-title">{title}</h2>
      </div>
      <div className="module-body">
        {
          subs.map( sub => {
            return <div key={sub} className="module-body-item">{sub}</div>;
          })
        }
      </div>
    </div>
  );
};

export default Module;