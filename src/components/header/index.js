import React from "react";
import PropTypes from "prop-types";
import {plural} from '../../utils.js';
import {formatPrice} from '../../utils.js';
import './style.css';

function Header(props) {
  return (
    <div className='Header-wrapper'>
      <div className='Header-title'>{props.title}</div>
      <div className='Header-data'>
        {props.basket.length > 0 ? `${props.basket.length} ${plural(props.basket.length, {
            one: 'товар',
            few: 'товара',
            many: 'товаров',
          })} / ${formatPrice(props.amount)} ₽`
        : 'пусто'}
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.node,
  amount: PropTypes.number,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
};

export default React.memo(Header);
