import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from '../../utils.js'
import './style.css';

function Item(props) {

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-block'>
        <div className='Item-price'>{formatPrice(props.item.price)} ₽</div>
        {(props.item.quantity > 0) ?
          <div className='Item-count'>{props.item.quantity} шт</div>
          : null
        }
        <div className='Item-actions'>
          <button className='Item-btn' onClick={() => props.callback(props.item.code)}>
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
