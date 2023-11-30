import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-block'>
        <div className='Item-price'>{props.item.price} ₽</div>
        <div className='Item-count'>
          {props.item.quantity ? `${props.item.quantity} шт` : null}
        </div>
        <div className='Item-actions'>
          <button onClick={() => props.callback(props.item.code)}>
            {props.title}
          </button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.node,
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  callback: PropTypes.func,
};

Item.defaultProps = {
  callback: () => {
  },
}

export default React.memo(Item);
