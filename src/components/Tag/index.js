import React from 'react';

import './Tag.css';

function Tag(props) {
  return (
    <div id="tag" key={props.key}>
      {props.tagname}
    </div>
  );
}

export default Tag;
