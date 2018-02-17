import React from 'react';

const Knowl = ({knowl}) => {
  if (!knowl) {
    return <div>No knowls here!</div>;
  }

  const title = knowl.title;
  const type = knowl.type;
  const field = knowl.field;
  const level = knowl.level;
  const displaytitle = `${title}(${field}) - ${type} [${level}] `;

  return (
    <div>
      <h2>{displaytitle}</h2>
      <p>{knowl.content}</p>
    </div>
  );
};


export default Knowl;
