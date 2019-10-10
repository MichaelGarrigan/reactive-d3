
import React, { useEffect } from 'react';

export default props => {
  useEffect( () => {
    return () => props.setRoute([]);
  }, []);

  return (
    <div>D3</div>
  );
};