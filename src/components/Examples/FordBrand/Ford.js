
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';

import { fordHierarchy } from './FordData.js';
import FordController from './FordController.js';
import FordPack from './FordPack.js';
import FordLine from './FordLine.js';
import TitleBanner from '../titleBanner/TitleBanner.js';
import './Ford.css';


// https://github.com/Swizec/useDimensions
function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

// function useDimensions({ liveMeasure = true }) {
//     const [dimensions, setDimensions] = useState({width: 960, height: 500});
//     const [node, setNode] = useState(null);

//     const wrapRef = useCallback(node => {
//         setNode(node);
//     }, []);

//     useLayoutEffect(() => {
//         if (node) {
//             const measure = () =>
//                 window.requestAnimationFrame(() => {
//                   let {width, height} = getDimensionObject(node)
//                   setDimensions({ 
//                     width: Math.round(width * .80), 
//                     height: Math.round(height * .75) 
//                   })
//                 });
            
//             measure();

//             if (liveMeasure) {
//                 window.addEventListener("resize", measure);

//                 return () => {
//                     window.removeEventListener("resize", measure);
//                 };
//             }
//         }
//     }, [node]);

//     return [wrapRef, dimensions, node];
// }


const Ford = props => {

  const [data, setData] = useState(fordHierarchy);
  const [view, setView] = useState('portrait');
  const [year, setYear] = useState('2018');
  const [category, setCategory] = useState('all');
  const [featuredItem, setFeaturedItem] = useState('');
  const [rankBy, setRankBy] = useState('Yearly Increase');
  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          })
        });
      
      measure();

      window.addEventListener("resize", measure);

      return () => { window.removeEventListener("resize", measure); };
      }
  }, [node]);


  // const [wrapRef, {height, width}] = useDimensions({ liveMeasure: true });
  // console.log('width: ', width)

  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  
  return (
    <div className="ford-wrapper" ref={wrapRef}>
      <TitleBanner title='Ford Sales - 2017 & 2018' />
      <div className="ford-flex">
        <FordController 
          category={category}
          data={data}
          dimensions={dimensions}
          featuredItem={featuredItem}
          view={view}
          year={year}
        />
        <FordPack 
          category={category}
          data={data}
          dimensions={dimensions}
          featuredItem={featuredItem}
          view={view}
          year={year}
        />
        <FordLine 
          category={category}
          data={data}
          dimensions={dimensions}
          featuredItem={featuredItem}
          view={view}
          year={year}
        />
      </div>
    </div>
  );
};

export default Ford;