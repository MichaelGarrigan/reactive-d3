
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default ({dimensions}) => {

  const [cursor, setCursor] = useState(true);

  useEffect( () => {
    const blink = setInterval( () => {
      setCursor( cursor => !cursor)
    }, 500);
    
    return () => clearInterval(blink);
  }, []);

  
  const [verbs, setVerbs] = useState(
    ["Exploring", "Understanding", "Hacking", "Building"]
  );
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [reset, setReset] = useState(false);
  
  useEffect( () => {

    let build = () => {
     
      // word has been build and erased
      if (position === 0 && reset) {
        setContent('');
        setReset(false);
      }
      // word has finished building
      else if (position === verbs[index % 4].length-1 && !reset) {
        setContent(`${content}${verbs[index % 4][position]}`);
        setReset(true);
        setIndex(index + 1);
      }
      // word is being built
      else if (position < verbs[index % 4].length-1  && !reset) {
        setContent(`${content}${verbs[index % 4][position]}`);
        setPosition(position + 1); 
      } 
      // word is being erased
      else {
        setContent(content.substring(0, position));
        setPosition(position - 1);
      }
    };
    
    let interval = setInterval(build, 600);
    
    
    return () => clearInterval(interval); 
  }, [position, content, index, reset]);



  return (
    <div className="home-wrapper">
      
      <div className={
        cursor ? "home-summary-verbs-blink" 
                : "home-summary-verbs"
      }
      >{content}</div>
       
      <p className="home-summary-p">d3 and React</p>
  
    </div>
  );
};