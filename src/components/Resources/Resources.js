import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

import Design from './resource/Design.js';
import D3 from './resource/D3.js';
import ReactJS from './resource/React.js';
import DataSources from './resource/DataSources.js';
import People from './resource/People.js';
import Groups from './resource/Groups.js';

import BooksSvg from './BooksSvg.js';
import BookSvg from './BookSvg.js';
import './Resources.css';

const categories = {
  design: Design,
  d3: D3,
  react: ReactJS,
  datasources: DataSources,
  people: People,
  groups: Groups
};



export default props => {
  let { path } = useRouteMatch();
  
  const size = props.dimensions;
  
  const width80 = Math.round(props.dimensions.width * 0.8);
  const size20 = Math.round(props.dimensions.width * 0.2);
  
  return (
    <Switch>
      <Route path={`${path}/design`} component={() => <Design dimensions={props.dimensions} />} />
      <Route path={`${path}/d3`} component={() => <D3 dimensions={props.dimensions} />} />
      <Route path={`${path}/datasources`} component={() => <DataSources dimensions={props.dimensions} />} />
      <Route path={`${path}/react`} component={() => <ReactJS dimensions={props.dimensions} />} />
      <Route path={`${path}/groups`} component={() => <Groups dimensions={props.dimensions} />} />
      <Route path={`${path}/people`} component={() => <People dimensions={props.dimensions} />} />

      <Route path={path}>
        <div className="resources-wrapper">
          <div className="resources-title-wrapper"> 
            <BooksSvg dimensions={props.dimensions} />
            <p className="resources-title">Resources</p>
          </div>

          <div className="resources-summary-wrapper">

            <p className="resources-summary">
              A curated collection of informational links, articles, documentation and blogs.
            </p>
            <p className="resources-summary">
              Click a category below to explore.
            </p>
          
          </div>

          <div className="resources-categories-wrapper">
          
            <Link to={`${path}/design`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">Design</p>
              </div>
            </Link>

            <Link to={`${path}/d3`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">D3</p>
              </div>
            </Link>

            <Link to={`${path}/datasources`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">Data</p>
              </div>
            </Link>

            <Link to={`${path}/react`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">React</p>
              </div>
            </Link>

            <Link to={`${path}/groups`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">Groups</p>
              </div>
            </Link>

            <Link to={`${path}/people`}>
              <div className="resources-category-wrapper">
                <BookSvg
                  className="resources-book-svg"
                  color=""
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">People</p>
              </div>
            </Link>
              
          </div>
        </div>
      </Route>
    </Switch>
  )
};