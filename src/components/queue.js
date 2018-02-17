import React, {Component} from 'react';
import Knowl from './knowl';

var queueStyle ={border:'1px solid black'};

const Queue  = (props) => {
  const knowls = props.knowls.map( (knowl) => {
    return <Knowl
            key={knowl.id}
            knowl={knowl}
                />
  });
    return (
      <div className="queue" style={queueStyle}>
        <Knowl />
      </div>
    );
  }

export default Queue;
