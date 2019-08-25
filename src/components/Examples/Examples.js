import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './Examples.css';

import AnimatedCircles from './AnimatedCircles/AnimatedCircles.js';
import Area from './Area/Area.js';
import Axis from './Axis/Axis.js';
import BarCharts from './BarCharts/BarCharts.js';
import Clocks from './Clocks/Clocks.js';
import Force from './Force/Force.js';
import Ford from './FordBrand/Ford.js';
import Gagues from './Gagues/Gagues.js';
import LineChart from './LineChart/LineChart.js';
import Lower48 from './Lower48/Lower48.js';
import Pie3Versions from './Pie3Versions/Pie3Versions.js';
import Treemap from './Treemap/Treemap.js';
import Tux from './Tux/Tux.js';

const Examples = props => {

  const [route, setRoute] = useState([]);
  const HOC = (Comp, props) => <Comp {...props} setRoute={setRoute} />;
  
  return (
    route.length === 0 
    ? (
    <div className="examples-wrapper">

      <Link to={`${props.match.url}/clocks`}>
        <div className="example-wrapper" onClick={() => setRoute(['clocks', Clocks])}>
          <p className="example-text">World</p>
          <p className="example-text">Clocks</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834" 
          >
            <g transform="translate(0 -265.78)">
              <g transform="translate(.20045 .60136)">
                <path 
                  className="example-svg-component-fill"
                  transform="matrix(.26458 0 0 .26458 0 265.78)" 
                  d="m29.162 10.922c8.5798 11.273 12.462 22.611 13.734 26.936a8.0812 7.7024 50.307 0 0 0.42188 1.4746c0.05065 0.19805 0.11133 0.44336 0.11133 0.44336l0.05078-0.04102a8.0812 7.7024 50.307 0 0 1.209 1.9512 8.0812 7.7024 50.307 0 0 8.4648 2.6895l46.516 56.041 4.4687-3.7109-46.514-56.039a8.0812 7.7024 50.307 0 0 -1.084 -8.8203 8.0812 7.7024 50.307 0 0 -4.1426 -2.6973c-4.4426-2.3447-14.325-8.228-23.236-18.227zm68.318 79.551a2.5254 2.5254 0 0 1 2.5254 2.5254 2.5254 2.5254 0 0 1 -2.5254 2.5254 2.5254 2.5254 0 0 1 -2.5254 -2.5254 2.5254 2.5254 0 0 1 2.5254 -2.5254z" 
                />
                <path 
                  className="example-svg-component-fill"
                  transform="matrix(.26458 0 0 .26458 0 265.78)" 
                  d="m161.8 31.949c-10.713 9.2696-21.785 13.853-26.021 15.395a7.7024 8.0812 46.713 0 0 -1.4473 0.51367c-0.19457 0.06312-0.4336 0.13867-0.4336 0.13867l0.043 0.04687a7.7024 8.0812 46.713 0 0 -1.8711 1.3301 7.7024 8.0812 46.713 0 0 -2.5234 7.2324l-39.906 37.588 5.7148 6.0664 39.914-37.596a7.7024 8.0812 46.713 0 0 7.3633 -2.0781 7.7024 8.0812 46.713 0 0 2.4336 -4.3047c2.0616-4.5809 7.3141-14.811 16.734-24.332zm-64.578 58.271a2.5254 2.5254 0 0 1 2.5254 2.5254 2.5254 2.5254 0 0 1 -2.5254 2.5254 2.5254 2.5254 0 0 1 -2.5254 -2.5254 2.5254 2.5254 0 0 1 2.5254 -2.5254z" 
                />
              </g>
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${props.match.url}/ford`}>
        <div className="example-wrapper" onClick={() => setRoute(['ford', Ford])}>
          <p className="example-text">Ford Sales</p>
          <p className="example-text">2017 & 2018</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834" 
          >
            <g transform="translate(0 -265.78)">
              <g transform="matrix(.27006 0 0 .27006 17.782 220.56)">
              <path 
                className="example-svg-component-fill"
                transform="matrix(.26458 0 0 .26458 0 265.78)" 
                d="m375.14-195.75-9.3203 0.29493c-8.4859 0.26948-11.179 3.139-30.084 32.057-11.42 17.468-22.339 31.781-24.264 31.807-1.9245 0.0227-4.2763-2.4025-5.2266-5.3965-2.6608-8.3838-14.455-13.338-26.416-11.094-5.7562 1.0802-17.377 7.5725-25.822 14.428-43.911 35.643-51.673 39.403-62.021 30.037-6.4918-5.875-7.3091-15.284-2.2852-26.311 4.2391-9.3038 9.0319-9.6362 12.877-0.89453 3.6659 8.3343 11.107 9.9004 17.355 3.6523 6.8363-6.8364 5.9308-15.33-2.2012-20.658-8.1482-5.3389-18.473-2.6267-28.617 7.5176-7.2772 7.2773-14.684 5.7274-14.684-3.0723 0-3.6165-2.7131-7.1282-6.6562-8.6133-8.3852-3.158-20.545 2.6086-35.297 16.736-11.067 10.599-20.18 11.561-20.18 2.1328 0-2.5991-1.4252-7.386-3.166-10.639-5.3528-10.002-11.144-1.7721-9.4336 13.404 2.7255 24.181-10.792 48.594-30.512 55.102-8.5441 2.8198-11.615 2.6078-17.432-1.2031-9.3713-6.1403-11.444-13.84-7.584-28.174 4.1207-15.303 14.71-27.706 30.195-35.367 9.6933-4.7959 11.264-6.536 7.2812-8.0645-7.6791-2.9467-29.25 6.5101-39.457 17.299-4.9845 5.2686-12.674 16.236-17.09 24.373-4.4157 8.1365-11.234 18.196-15.152 22.354-3.9178 4.1574-7.123 8.4838-7.123 9.6152 0 3.7556 8.0924 2.1274 11.834-2.3809 5.4116-6.5206 10.434-5.4288 14.326 3.1133 1.8921 4.1529 8.1677 9.5254 13.945 11.939 21.747 9.0863 40.255-1.486 67.791-38.721 18.387-24.862 32.815-36.986 44.018-36.986 12.511 0 9.9314 9.9096-11.408 43.832-10.559 16.785-19.199 31.098-19.199 31.807 0 0.70896 3.8144 1.2891 8.4766 1.2891 7.455 0 10.336-3.0317 23.9-25.15 8.4826-13.832 16.683-25.148 18.225-25.148 1.5415 0 3.9634 3.051 5.3809 6.7793 5.4046 14.215 10.961 15.665 36.055 9.4102 7.2564-1.8089 7.8118-1.1662 9.4316 10.91 1.9368 14.44 12.702 26.158 24.031 26.158 3.7504 0 11.724-3.3282 17.719-7.3965 12.254-8.316 19.512-9.4795 19.512-3.127 0 6.362 12.187 13.76 19.143 11.621 3.3046-1.0165 10.003-3.8238 14.885-6.2383 10.034-4.9629 41.292-35.919 38.793-38.418-0.89573-0.89575-9.7342 5.8752-19.641 15.047-13.078 12.108-20.31 16.676-26.402 16.676-18.053 0-15.325-7.5399 25.381-70.127 11.855-18.228 24.833-38.331 28.838-44.676zm-91.35 67.277c0.28948 4e-3 0.58138 0.0161 0.875 0.0371 13.126 6.969-4.4423 36.523-16.404 43.863-12.783 12.161-27.337 8.8974-18.154-9.627 2.8182-16.055 17.865-26.678 17.865-26.678s6.4133-7.2338 14.957-7.584c0.28479-0.0117 0.57185-0.0157 0.86133-0.0117z" 
                strokeWidth="13.995"
              />
              <path 
                className="example-svg-component-fill"
                d="m-21.566 250.68c5.3615-2.4911 9.5815-6.9141 16.485-17.277 6.1901-9.2929 6.8686-10.036 9.5714-10.483 4.6559-0.76972 9.174-0.57403 10.189 0.44127 0.73063 0.73066 0.9394 0.66367 0.9394-0.30138 0-0.68243 0.88067-1.8178 1.9571-2.5231 1.9234-1.2603 2.7085-4.6036 1.2873-5.482-0.36836-0.22753-0.51837 0.37789-0.33339 1.3456 0.20948 1.0963-0.25711 2.2966-1.238 3.1843-2.8986 2.6232-4.5109-0.61684-1.8687-3.7554 1.3626-1.6185 1.3607-1.6195-0.34727-0.17604-0.94446 0.79824-1.8252 2.3835-1.9571 3.5228-0.22457 1.9398-0.52577 2.0863-4.7411 2.3062-3.9568 0.20622-4.5013 0.058-4.5013-1.2272 0-1.4713 5.8711-8.0247 10.96-12.233l2.7399-2.2661 10.177 2.6575c13.194 3.4453 21.507 3.6582 27.354 0.70045 3.7395-1.8915 5.9553-4.1359 5.0133-5.078-0.2509-0.25087-1.9998-0.1003-3.8865 0.33472-6.7422 1.5544-23.135 0.98343-36.038-1.2552-14.92-2.5885-27.973-2.8919-34.066-0.79189-5.019 1.7298-10.814 6.7169-12.007 10.334-1.783 5.4026 1.3884 10.547 6.5022 10.547 3.5759 0 8.8391-3.4767 11.098-7.3308 2.6378-4.501 2.4943-5.0543-0.44319-1.7087-5.0162 5.7132-12.453 5.2902-12.453-0.7082 0-6.2262 8.1438-10.637 19.517-10.572 12.261 0.0707 19.023 2.9091 13.606 5.711-2.424 1.2538-10.428 9.3448-11.821 11.95-0.62565 1.1696-2.2597 1.9398-5.6346 2.6561-2.6144 0.55479-4.926 1.2881-5.137 1.6294-0.21096 0.34138 0.73016 0.30129 2.0914-0.0891 2.6644-0.76412 3.8178-0.43994 3.8178 1.0731 0 1.495-8.1443 11.336-12.359 14.933-7.3157 6.2446-14.735 6.746-17.707 1.1968-1.9674-3.6744-1.2232-6.5196 2.6752-10.228 3.3543-3.1909 3.341-4.0836-0.04349-2.9038-3.1563 1.1003-7.6064 6.2952-8.2271 9.6042-1.92 10.234 8.5374 17.044 18.83 12.262z" 
                strokeWidth="3.7028"
              />
              </g>
                <path 
                  className="example-svg-component-fill"
                  d="m-56.919 299.46c0-0.20092-0.99234 0.45509-1.3447 0.88895-0.23212 0.28582-0.0473 0.22193 0.48478-0.16761 0.47294-0.34622 0.8599-0.67082 0.8599-0.72134z"
                />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${props.match.url}/barCharts`}>
        <div className="example-wrapper" onClick={() => setRoute(['barCharts', BarCharts])}>
          <p className="example-text">Bar</p>
          <p className="example-text">Charts</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834" 
          >
            <g transform="translate(0 -265.78)">
              <path 
                className="example-svg-component-stroke"
                d="m6.6632 289.14 7.843-0.0472-0.0945-15.119 7.9375 1e-5 1e-6 15.119 8.1737-1e-5 -0.04725-11.103 7.7485-0.0473v11.198l6.2839 1e-5"
                fill="none" 
                strokeWidth="1.9844"
              />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${props.match.url}/lineChart`}>
        <div className="example-wrapper" onClick={() => setRoute(['lineChart', LineChart])}>
          <p className="example-text">Line</p>
          <p className="example-text">Chart</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834" 
          >
            <g transform="translate(0 -265.78)">
              <path 
                className="example-svg-component-stroke"
                d="m9.3544 288.58 9.0872-12.027 6.949 14.433 12.963-19.11 3.4745 8.2854" 
                fill="none" 
                strokeWidth="1.9844"
              />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${props.match.url}/lower48`}>
        <div className="example-wrapper" onClick={() => setRoute(['lower48', Lower48])}>
          <p className="example-text">US Lower</p>
          <p className="example-text">48 States</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329166 31.220832" 
          >
            <g transform="translate(0 -265.78)">
              <circle cx="33.943" cy="273.88" r=".4009" className="example-svg-component-fill"/>
              <circle cx="34.01" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.607" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="33.275" cy="277.69" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.039" cy="268.6" r=".4009" className="example-svg-component-fill"/>
              <circle cx="13.363" cy="288.65" r=".4009" className="example-svg-component-fill"/>
              <circle cx="11.092" cy="288.18" r=".4009" className="example-svg-component-fill"/>
              <circle cx="9.2208" cy="286.98" r=".4009" className="example-svg-component-fill"/>
              <circle cx="7.0158" cy="285.98" r=".4009" className="example-svg-component-fill"/>
              <circle cx="5.479" cy="284.3" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.8086" cy="282.83" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.2741" cy="280.63" r=".4009" className="example-svg-component-fill"/>
              <circle cx="6.214" cy="267.13" r=".4009" className="example-svg-component-fill"/>
              <circle cx="6.0136" cy="268.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.8731" cy="278.36" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.4722" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.8731" cy="273.61" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.8086" cy="271.68" r=".4009" className="example-svg-component-fill"/>
              <circle cx="4.5436" cy="269.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="4.6772" cy="267.53" r=".4009" className="example-svg-component-fill"/>
              <circle cx="36.148" cy="290.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="38.286" cy="290.59" r=".4009" className="example-svg-component-fill"/>
              <circle cx="39.155" cy="292.26" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.157" cy="293.99" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.899" cy="280.03" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.832" cy="281.83" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.498" cy="284.1" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.761" cy="285.71" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.491" cy="287.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.224" cy="289.78" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.226" cy="291.72" r=".4009" className="example-svg-component-fill"/>
              <circle cx="42.162" cy="293.46" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.694" cy="295.33" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.634" cy="271.74" r=".4009" className="example-svg-component-fill"/>
              <circle cx="35.948" cy="274.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.307" cy="275.28" r=".4009" className="example-svg-component-fill"/>
              <circle cx="45.369" cy="276.35" r=".4009" className="example-svg-component-fill"/>
              <circle cx="34.21" cy="290.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.54" cy="291.72" r=".4009" className="example-svg-component-fill"/>
              <circle cx="30.736" cy="291.86" r=".4009" className="example-svg-component-fill"/>
              <circle cx="28.731" cy="291.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="16.237" cy="288.65" r=".4009" className="example-svg-component-fill"/>
              <circle cx="17.573" cy="290.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="19.043" cy="291.79" r=".4009" className="example-svg-component-fill"/>
              <circle cx="20.847" cy="291.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="21.983" cy="292.99" r=".4009" className="example-svg-component-fill"/>
              <circle cx="26.727" cy="292.19" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.856" cy="293.26" r=".4009" className="example-svg-component-fill"/>
              <circle cx="22.918" cy="294.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.656" cy="295.6" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.054" cy="269.54" r=".4009" className="example-svg-component-fill"/>
              <circle cx="21.649" cy="269.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="19.577" cy="269.34" r=".4009" className="example-svg-component-fill"/>
              <circle cx="17.506" cy="269.2" r=".4009" className="example-svg-component-fill"/>
              <circle cx="15.101" cy="268.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="12.829" cy="268.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="10.557" cy="268" r=".4009" className="example-svg-component-fill"/>
              <circle cx="8.419" cy="267.4" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.874" cy="273.95" r=".4009" className="example-svg-component-fill"/>
              <circle cx="33.876" cy="271.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.072" cy="271.28" r=".4009" className="example-svg-component-fill"/>
              <circle cx="29.801" cy="271.88" r=".4009" className="example-svg-component-fill"/>
              <circle cx="30.469" cy="270.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="28.13" cy="270.14" r=".4009" className="example-svg-component-fill"/>
              <circle cx="26.192" cy="269.67" r=".4009" className="example-svg-component-fill"/>
              <circle cx="35.68" cy="273.15" r=".4009" className="example-svg-component-fill"/>
              <circle cx="45.904" cy="270.14" r=".4009" className="example-svg-component-fill"/>
              <circle cx="46.572" cy="273.08" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.908" cy="271.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.975" cy="270.01" r=".4009" className="example-svg-component-fill"/>
              <circle cx="36.683" cy="277.09" r=".4009" className="example-svg-component-fill"/>
              <circle cx="38.821" cy="276.42" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.09" cy="274.75" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.894" cy="274.15" r=".4009" className="example-svg-component-fill"/>
              <circle cx="42.763" cy="272.14" r=".4009" className="example-svg-component-fill"/>
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${props.match.url}/treemap`}>
        <div className="d3-example" onClick={() => setRoute(['treemap', Treemap])}>
          <span className="d3-example-text">Treemap</span>
          <span className="d3-example-text">Basic</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/tux`}>
        <div className="d3-example tux_svg" onClick={() => setRoute(['tux', Tux])}>
          <span className="d3-example-text">SVG Tux</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/gagues`}>
        <div className="d3-example gague-circle1" onClick={() => setRoute(['gagues', Gagues])}>
          <span className="d3-example-text">Gagues</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/pie3Versions`}>
        <div className="d3-example" onClick={() => setRoute(['pie3Versions', Pie3Versions])}>
          <span className="d3-example-text">d3 & React</span>
          <span className="d3-example-text">3 versions</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/force`}>
        <div className="d3-example force" onClick={() => setRoute(['force', Force])}>
          <span className="d3-example-text">Force</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/area`}>
        <div className="d3-example area" onClick={() => setRoute(['area', Area])}>
          <span className="d3-example-text">Area Chart</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/animatedCircles`}>
        <div className="d3-example" onClick={() => setRoute(['animatedCircles', AnimatedCircles])}>
          <span className="d3-example-text">Animated Circles</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/axis`}>
        <div className="d3-example" onClick={() => setRoute(['axis', Axis])}>
          <span className="d3-example-text">Axis</span>
        </div>
      </Link>
      
      </div>
      )
      : (
        <Route 
          exact
          path={`${props.match.path}/${route[0]}`}
          component={ (props) => HOC(route[1], {...props}) }
        />
      )
  )
};

export default Examples;