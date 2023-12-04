import React from "react";
import './style.css';
import BasketModal from '../basketModal';
import PropTypes from "prop-types";

function Modal(props) {

  return (
    <div className="Modal">
      <div className="Modal-dialog">
        <div className="Modal-header">
          <h3 className="Modal-title">{props.title}</h3>
          {props.button && <div className="Modal-footer">{props.button}</div>}
        </div>
        <BasketModal  amount={props.amount}
                      basket={props.basket}
                      onDeleteItem={props.onDeleteItem}/>
      </div>
    </div>
  );
}

Modal.propTypes = {
  button: PropTypes.node,
  title: PropTypes.node,
  amount: PropTypes.number,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
};

Modal.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Modal);
