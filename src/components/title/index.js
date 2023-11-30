import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Title({title}) {
  return (
    <div className='Title'>
      <h1>{title}</h1>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.node,
};

export default React.memo(Title);
