import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Controls(props) {

  return (
    <div className='Controls'>
      <button className='Controls-btn' onClick={props.onShowModal}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onShowModal: PropTypes.func,
};

Controls.defaultProps = {
  onShowModal: () => {
  },
}

export default React.memo(Controls);
