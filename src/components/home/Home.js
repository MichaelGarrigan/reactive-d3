
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default ({dimensions}) => {
  
  const [verbs, setVerbs] = useState(
    ["Exploring", "Hacking", "Building"]
  );
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(0);
  const [fadeWordNow, setFadeWordNow] = useState(false);
  const [pause, setPause] = useState(0);
  
  useEffect( () => {

    let build = () => {
      
      if (index === verbs[word % 3].length && pause < 6) {
        setPause(pause + 1);
      }
      else if (index < verbs[word % 3].length) {
        setContent(content + verbs[word % 3][index]);
        setIndex(index + 1);
      } 
      else {
        setPause(0)
        setContent('');
        setIndex(0);
        setWord(word + 1);
      }
    };
    
    let interval = setInterval(build, 400);
    
    
    return () => clearInterval(interval); 
  }, [content, index, word, pause]);



  return (
    <div className="home-wrapper">
      
      <div className="home-box-dynamic">
        <span className="home-text-dynamic">{content}</span>
      </div>

      <div className="home-box-static">
        <p className="home-text-static">d3 and React</p>
      </div>
    
    </div>
  );
};