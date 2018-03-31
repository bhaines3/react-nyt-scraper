import React from 'react';

const Panel = (props) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title text-center">{props.title}</h3>
      </div>
      <div className="panel-body">
        {props.children}
      </div>
    </div>

  );
};

export default Panel;